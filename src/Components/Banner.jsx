import React , {useEffect, useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
    const [loopNum,setloopNum] = useState(0);
    const [isDelete,setIsDelete] = useState(false);
    const toRotate = ["Web Developer","Full Stack Developer","UI/UX Designer"];
    const [text,setText]= useState('')
    const [delta,setDelta]= useState(300- Math.random() * 100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>[
            tick()
        ],delta)

        return () => {clearInterval(ticker)};

    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDelete ? fullText.substring(0,text.length -1 ) : fullText.substring(0,text.length + 1)
        setText(updatedText);

        if(isDelete){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDelete && updatedText === fullText){
                setIsDelete(true);
                setDelta(period)

        }else if(isDelete && updatedText === ""){
            setIsDelete(false);
            setloopNum(loopNum+1);
            setDelta(500)
    }
}
    
  return (
   <section className='banner' id='home'>
    <Container>
        <Row className='align-items-center'>
<Col xs={12} md={6} xl={7}>
    <span className='tagline'>Welcome To My portfolio</span>
    <h1>{`Hi I am jagadhiswaran `}<span className='wrap'>{text}</span></h1>
    <p>About Me</p>
    <button onClick={()=>console.log('connect')}>Let's Connect</button>
</Col>
<Col xs={12} md={6} xl={5}>
  <img src={headerImg} alt="Header Img"/>
</Col>
        </Row>
    </Container>

   </section>
  )
}

export default Banner