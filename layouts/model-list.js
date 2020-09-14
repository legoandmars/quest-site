import {Button, ButtonGroup, Card, Image} from "react-bootstrap";
import { renderToString } from 'react-dom/server'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../layouts/header'

export default function getCard(imageName, downloadName, endpoint){
    return (
        <div class="col-md-4">
        <div class="card mb-4 box-shadow">
            <img class="card-img-top" src={`./${imageName}`} alt="Card image cap"></img>
                <ButtonGroup className="d-flex">
                    <Button className="w-100" type="button" variant="dark" href={`./${downloadName}`} download>Download</Button>
                    <Button className="w-100" type="button" variant="dark" href={`./${endpoint}`}>Details</Button>
                </ButtonGroup>
        </div>
    </div>
    )
}

export function modelPage(allModels, modelType){
    let modelElementList = [];
    let sixPageList = [];
    // send it off to be rendered by model-list;
    for (let i = 0; i < allModels.length; i++) {
        const model = allModels[i];
        if((model.type == modelType || modelType == "all Model") && !model.hidden){
            modelElementList.push(getCard(model["image_name"], model["file_name"], model.endpoint))
        }
    }

    for(let i = 0; i < modelElementList.length; i++){
        if(!sixPageList[Math.ceil((i+1)/6) - 1]){
            sixPageList[Math.ceil((i+1)/6) - 1] = [];
        }
        sixPageList[Math.ceil((i+1)/6) - 1].push(modelElementList[i]);
    }

    function getDescription(){
        if(modelType.toLowerCase() !== "all model"){
            return(
            <>
                <meta content={modelType.charAt(0).toUpperCase() + modelType.slice(1)+"s"} property="og:title"></meta>
                <meta content={`Download Bobbie's Custom ${modelType.charAt(0).toUpperCase() + modelType.slice(1)+"s"} for Beat Saber.`} property="og:description"></meta>
            </>)
        }else{
            return(
            <>
                <meta content="Bobbie's Model Site" property="og:title"></meta>
                <meta content="Download Bobbie's model packs, notes, walls, and more!" property="og:description"></meta>
                <meta content="https://bobbie.dev/bobbie.png" property="og:image"></meta>
            </>)
        }
    }

    const initialPage = sixPageList[0];

    const [selectedPage, setSelectedPage] = React.useState(initialPage);
    
    const [pageNumber, setSelectedPageNumber] = React.useState(0);

    function previousPage(){
        const indexOfPage = sixPageList.indexOf(sixPageList.find(element => renderToString(element[0]).split("src=")[1].split('"')[1] == renderToString(selectedPage[0]).split("src=")[1].split('"')[1]));
        if(indexOfPage == 0){
            setSelectedPage(sixPageList[sixPageList.length - 1]);
            setSelectedPageNumber(sixPageList.length - 1);
        }else{
            setSelectedPage(sixPageList[indexOfPage - 1]);
            setSelectedPageNumber(indexOfPage - 1);
        }
    }
    function nextPage(){
        const indexOfPage = sixPageList.indexOf(sixPageList.find(element => renderToString(element[0]).split("src=")[1].split('"')[1] == renderToString(selectedPage[0]).split("src=")[1].split('"')[1]));
        if(indexOfPage + 1 == sixPageList.length){
            setSelectedPage(sixPageList[0]);
            setSelectedPageNumber(0);
        }else{
            setSelectedPage(sixPageList[indexOfPage + 1]);
            setSelectedPageNumber(indexOfPage + 1);
        }
    }

    function getButtons(){
        if(sixPageList.length > 1){
            return(
                <>
                    <p class="text-light descriptiontext">{`${pageNumber+1}/${sixPageList.length}`}</p>
                    <Button variant="dark" class="left-arrow-button" size="lg" onClick={()=>previousPage()}>
                        <Image class="arrowleft" src="arrow-left.png"></Image>
                    </Button>
                    <Button variant="dark" class="arrow-button" size="lg" onClick={()=>nextPage()}>
                        <Image class="arrow" src="arrow.png"></Image>
                    </Button>  
                </>
            );
        }
    }
    return (
        <>
            <Header></Header>
            <style type="text/css">
            {`
                :root {
                --jumbotron-padding-y: 3rem;
                }
                .jumbotron {
                padding-top: var(--jumbotron-padding-y);
                padding-bottom: var(--jumbotron-padding-y);
                margin-bottom: 0;
                background-color: #fff;
                }
                @media (min-width: 768px) {
                .jumbotron {
                    padding-top: calc(var(--jumbotron-padding-y) * 2);
                    padding-bottom: calc(var(--jumbotron-padding-y) * 2);
                }
                }
    
                .jumbotron p:last-child {
                margin-bottom: 0;
                }
    
                .jumbotron-heading {
                font-weight: 300;
                }
    
                .jumbotron .container {
                    max-width: 40rem;
                }
                .container{
                }
                footer {
                padding-top: 3rem;
                padding-bottom: 3rem;
                }
    
                footer p {
                margin-bottom: .25rem;
                }
    
                .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
    
                .album {
                    background-color: #202020;
                }
                body{
                    background-color: #202020;
                }
                .card-title{
                    font-size:2rem;
                    text-align: center;
                    margin-bottom: .2rem;
                }
                .btn{
                    font-size: 1.5rem;
                }
                .card{
                    background-color: #303030;
                }
                .btn{
                    background-color: #000000;
                    border-color: #4d4d4d;
                }
                ::-webkit-scrollbar {
                    width: 8px;
                    background-color: transparent;
                    -webkit-border-radius: 100px;
                }
                ::-webkit-scrollbar:hover {
                    background-color: rgba(0, 0, 0, 0.09);
                }
                ::-webkit-scrollbar-thumb:vertical {
                    background: rgba(0,0,0,0.5);
                    -webkit-border-radius: 100px;
                }
                ::-webkit-scrollbar-thumb:vertical:active {
                    background: rgba(0,0,0,0.61);
                    -webkit-border-radius: 100px;
                }
                .arrow-button{
                    background-color: #000000;
                    border-radius: 0.5vw;
                    border: 0.10vw solid #4d4d4d;
                    width:3vw;
                    height:3vw;
                    top: calc(90% + 0.2vw);
                    left: calc(55% - 3.0vw);
                    outline: none !important;
                    padding:0;
                    margin:0px;
                    float: right;
                }
                .left-arrow-button{
                    background-color: #000000;
                    border-radius: 0.5vw;
                    border: 0.10vw solid #4d4d4d;
                    width:3vw;
                    height:3vw;
                    top: calc(90% + 0.2vw);
                    left: 0;
                    outline: none !important;
                    padding:0;
                    margin:0;
                }
                .arrow{
                    left:0.375vw;
                    top:0.375vw;
                    width:2.25vw;
                    height:2.25vw;
                }
                .arrowleft{
                    right:0.375vw;
                    top:0.375vw;
                    width:2.25vw;
                    height:2.25vw;
                }
                .descriptiontext{
                    position:absolute;
                    font-size:1.5vw;
                    text-align: center;
                    margin-top: 0.5vw;
                    margin-bottom: 0.5vw;
                    margin-left: 0.75vw;
                    margin-right: 0.75vw;
                    width:5vw;
                    left: calc(50% - 5vw/1.7);
                }
            `}
            
            </style>
            <Head>
                <title>{modelType.charAt(0).toUpperCase() + modelType.slice(1)+"s"}</title>
                <meta content="bobbie.dev" property="og:site_name"></meta>
                <meta content="#96e3ff" name="theme-color"></meta>
                {getDescription()}
            </Head>
            <div class="album py-5">
                <div class="container">
                    <div class="row">
                        {selectedPage}
                    </div>
                    {getButtons()}
                </div>
          </div>
    
        </>
      )
}  
/*[{
    "image_name": "testimage.png",
    "file_name": "Diamond Ore.pixie",
    "type": "wall",
    "endpoint": "DiamondOre"
}]*/