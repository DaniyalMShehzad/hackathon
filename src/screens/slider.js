import { Carousel } from 'antd';
export default function Slick() {
    return (
        <div className="Carousel">
        <Carousel autoplay>
            <div className="CarosulImage">
                <img className="slid-img" src="https://s.alicdn.com/@img/imgextra/i1/O1CN01aX23AE1uRABJ4InsG_!!6000000006033-0-tps-990-400.jpg" />
            </div>
            <div className="CarosulImage">
                <img className="slid-img" src="https://s.alicdn.com/@img/imgextra/i1/O1CN01aX23AE1uRABJ4InsG_!!6000000006033-0-tps-990-400.jpg" />
            </div>
            <div className="CarosulImage">
                <img className="slid-img" src="https://s.alicdn.com/@img/imgextra/i1/O1CN01aX23AE1uRABJ4InsG_!!6000000006033-0-tps-990-400.jpg" />
            </div>
            <div className="CarosulImage">
                <img className="slid-img" src="https://s.alicdn.com/@img/imgextra/i1/O1CN01aX23AE1uRABJ4InsG_!!6000000006033-0-tps-990-400.jpg" />
            </div>
        </Carousel>
        </div>
    )

}