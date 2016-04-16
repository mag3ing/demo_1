import React,{Component} from 'react';
require ('./banner.css');
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
var imgDatas = [img1, img2, img3, img4];
// var length = imgDatas.length;
function targetMove(target, move){
    target.style.transform = `translate(${move}px, 0, 0)`;
    target.style.webkitTransform = `translate3d(${move}px,0 0)`;
}
function targetMoveLeft(target, move){
    target.style.left = move+'px';
}
export default class Banner extends Component {
    componentWillMount(){
        this.clientWidth = document.documentElement.clientWidth;
    }
    changeActive(index){
        var pointers = this.refs.pointers.getElementsByTagName('span');
        [...pointers].forEach(data=>data.classList.remove('p-color'));
        pointers[index].classList.add('p-color');
    }
    getBannerIndex(index){
        if(this.index<0){
            return Math.abs(index%this.length);
        }else{
            var index = index%this.length;
            return Math.abs((this.length-index)%this.length);
        }
    }

    imgToCenter(index){
        let left = Math.floor((this.length-1)/2);
        let right = Math.ceil((this.length-1)/2);
        let bannerIndex = this.getBannerIndex(index);
        targetMoveLeft(this.refs[`banner${bannerIndex}`],-this.clientWidth*index);
        for(let i=1;i<=left;i++){
            let left = bannerIndex-i<0?this.length+bannerIndex-i:bannerIndex-i;
            targetMoveLeft(this.refs[`banner${left}`],-this.clientWidth*index-this.clientWidth*i);
        }
        for(let i=1;i<=right;i++){
            let right = bannerIndex+i>=this.length?i+bannerIndex-this.length:bannerIndex+i;
            targetMoveLeft(this.refs[`banner${right}`],-this.clientWidth*index+this.clientWidth*i);
        }

    }
    autoMove(index){
        this.bannerBox.classList.add('banner-move');
        this.imgToCenter(index);
        targetMove(this.bannerBox,this.clientWidth*index);
    }
    autoMoveRun(){
        this.timer=setInterval(()=>{
            this.index--;
            let bannerIndex = this.getBannerIndex(this.index);
            this.autoMove(this.index);
            this.changeActive(bannerIndex);
        },3000)
    }
    componentDidMount() {
        var height = this.clientWidth * 35 / 64;
        var banner = this.refs.banner;
        this.bannerBox = this.refs.bannerBox;
        banner.style.height = height + 'px';
        this.bannerBox.style.height = height + 'px';
        if (this.length) {
            this.changeActive(0);
            this.refs[`banner${0}`].style.zIndex = 11;
        }
        this.index = 0;
        this.imgToCenter(0);
        if (this.length > 1) this.autoMoveRun();
    }
    render(){
        this.imgDatas = imgDatas;
        this.length = this.imgDatas.length;
        var icons = [];
        var imgs = [];
        for(var i=0; i<this.length;i++){
            icons.push(<span className="pointer" key={i}></span>);
            imgs.push(<img src={this.imgDatas[i]} className="banner-img" ref={`banner${i}`} key={i} data-index={i} />);
        }

        return (
            <div className="banner-wrap">
                <div className="banner" ref="banner">
                    <div ref="bannerBox" >
                        {imgs}
                    </div>
                    <p className="banner-pointer" ref="pointers">
                        {icons}
                    </p>
                </div>
            </div>
        )
    }
}
