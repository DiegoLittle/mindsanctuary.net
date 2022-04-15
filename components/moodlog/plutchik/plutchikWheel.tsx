import React, { useState } from 'react'
import styles from './plutchikWheel.module.css'

const plutchikWheel = () => {
    const [emotion,setEmotion] = useState("Select an emotion")
    const [target,setTarget] = useState()
  return (
    <div>
        <div className='text-center'>{emotion}</div>
        <svg className={styles.wheel} onMouseOver={(e)=>{
            setEmotion(e.target.getAttribute("emotion"))
        }} onClick={(e)=>{
            console.log(e.target)
            console.log(e.currentTarget)
            }} xmlns="http://www.w3.org/2000/svg" version="1.1" width="715px" height="725px" viewBox="0 0 715 725"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/>
        <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/>
        <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/>
        
<g id="circles" fill="none" stroke="#000" stroke-width="2">
	<circle id="outer-ring" stroke-dasharray="6" cx="357.5" cy="362.5" r="250"/>
	<circle id="inner-ring" stroke-dasharray="4" cx="357.5" cy="362.5" r="188"/>
</g>
<g id="areas" stroke="#000" stroke-width="2">
	<path emotion="test" className="fill-red-200" d="M110.303,325.048C84.749,332.483,58.82,344.254,33,362.488   c24.984,18.157,51.076,29.983,77.296,37.476C106.462,374.791,106.564,349.555,110.303,325.048z"/>
	<path fill="#C5E2C5" d="M604.723,399.955c26.213-7.488,52.3-19.314,77.277-37.47   c-25.812-18.227-51.728-29.997-77.269-37.432C608.563,350.221,608.459,375.453,604.723,399.955z"/>
	<path emotion="apprehension" fill="#8CC68C" d="M539.196,410.803c21.552-1.346,43.584-4.578,65.524-10.848   c3.736-24.502,3.843-49.734,0.013-74.897c-22.233-6.471-44.188-9.651-65.539-10.933   C547.881,346.588,547.452,379.844,539.196,410.803z"/>
	<path emotion="fear" fill="#009600" d="M472.43,314.882c6.084,14.668,9.449,30.749,9.449,47.618   c0,16.859-3.359,32.932-9.438,47.594c21.231,1.439,43.719,2.148,66.756,0.709c8.258-30.959,8.687-64.215-0.002-96.678   C516.104,312.74,493.713,313.576,472.43,314.882z"/>
	<path emotion="terror" fill="#008000" d="M472.438,410.104c12.582-30.408,12.582-64.796,0-95.204L357.512,362.5L472.438,410.104z"/>
	<path emotion="annoyance" className='fill-red-300' d="M175.847,314.122c-21.354,1.277-43.308,4.456-65.545,10.926   c-3.737,24.507-3.842,49.743-0.008,74.913c21.939,6.268,43.971,9.496,65.518,10.844   C167.138,378.338,167.578,345.08,175.847,314.122z"/>
	<path emotion="anger" className="fill-red-500" d="M242.571,410.092l0.011-0.004c-6.076-14.66-9.438-30.729-9.438-47.588   c0-16.866,3.363-32.943,9.445-47.609l-0.021-0.008c-21.271-1.306-43.646-2.141-66.725-0.761   c-8.269,30.958-8.71,64.216-0.036,96.683C198.851,412.242,221.338,411.531,242.571,410.092z"/>
	<path emotion="rage" className="fill-red-700" fill="#D40000" d="M242.589,314.899c-12.583,30.409-12.583,64.797,0,95.205L357.512,362.5L242.589,314.899z"/>
	<path emotion="Ecstasy" fill="#FFE854" d="M309.908,247.577L357.512,362.5l47.604-114.923   C374.702,234.995,340.319,234.995,309.908,247.577z"/>
	<path emotion="joy" fill="#FFFF54" d="M309.907,247.573l0.002,0.006c14.664-6.081,30.739-9.444,47.604-9.444   c16.854,0,32.922,3.359,47.58,9.437l0.003-0.005c0.008-0.011,0.018-0.021,0.021-0.026c1.304-21.269,2.138-43.636,0.757-66.704   c-30.959-8.268-64.214-8.705-96.679-0.026C307.757,203.847,308.468,226.336,309.907,247.573z"/>
	<path emotion="serenity" fill="#FFFFB1" d="M405.872,180.831c-1.273-21.354-4.456-43.308-10.929-65.544c-24.504-3.734-49.738-3.837-74.904-0.003   c-6.268,21.939-9.5,43.971-10.845,65.519C341.66,172.126,374.916,172.567,405.872,180.831z"/>
	<path fill="#FEFFDD" d="M394.948,115.287C387.517,89.74,375.741,63.818,357.512,38   c-18.155,24.979-29.98,51.066-37.471,77.284C345.206,111.449,370.441,111.552,394.948,115.287z"/>
	<path fill="#C5C5FF" d="M320.038,609.707c7.489,26.219,19.315,52.309,37.474,77.293   c18.229-25.813,30-51.732,37.436-77.277C369.78,613.553,344.544,613.449,320.038,609.707z"/>
	<path emotion="pensiveness" fill="#8C8CFF" d="M309.195,544.182c1.346,21.553,4.576,43.582,10.844,65.525   c24.506,3.738,49.741,3.846,74.907,0.016c6.472-22.232,9.647-44.188,10.931-65.535   C373.409,552.869,340.155,552.444,309.195,544.182z"/>
	<path emotion="sadness" fill="#5151FF" d="M405.116,477.428l-0.002-0.004c-14.664,6.08-30.739,9.443-47.604,9.443   c-16.863,0-32.938-3.363-47.604-9.443l-0.002,0.004c-1.438,21.23-2.149,43.721-0.712,66.754c30.96,8.262,64.216,8.689,96.679,0.006   C407.258,521.098,406.422,498.711,405.116,477.428z"/>
	<path emotion="grief" fill="#0000C8" d="M405.116,477.424L357.512,362.5l-47.604,114.924   C340.319,490.006,374.702,490.006,405.116,477.424z"/>
	<path className="fill-orange-700" emotion="Vigilence" fill="#FF7D00" d="M242.589,314.899L357.512,362.5l-47.604-114.923   C279.509,260.183,255.194,284.497,242.589,314.899z"/>
	<path className="fill-orange-500" emotion="anticipation" fill="#FFA854" d="M242.58,314.886l0.011,0.004c12.606-30.396,36.919-54.708,67.317-67.313   l-0.006-0.018c-14.125-15.968-29.368-32.383-46.669-47.729c-29.093,16.813-52.301,40.631-68.354,68.356   C210.151,285.498,226.552,300.893,242.58,314.886z"/>
	<path className="fill-orange-300" emotion="interest" fill="#FFC48C" d="M263.233,199.834c-16.001-14.192-33.779-27.459-54.076-38.606c-20.498,15.085-38.263,33-52.943,52.968   c11.085,19.946,24.38,37.813,38.667,54C210.934,240.465,234.142,216.649,263.233,199.834z"/>
	<path fill="#FFE2FF" d="M156.228,510.84c-12.811,23.32-22.829,49.961-28.192,81.107   c30.508-4.828,57.32-14.916,81.155-28.16C189.226,549.108,171.312,531.34,156.228,510.84z"/>
	<path emotion="boredom" fill="#FFC6FF" d="M194.837,456.762c-14.194,16.002-27.461,33.779-38.609,54.078   c15.083,20.5,32.998,38.268,52.963,52.947c19.948-11.084,37.812-24.379,53.999-38.666   C235.463,509.071,211.646,485.86,194.837,456.762z"/>
	<path emotion="digust" fill="#FF54FF" d="M309.886,477.42l0.003-0.006   c-30.396-12.609-54.704-36.926-67.307-67.326l-0.02,0.008c-15.967,14.123-32.381,29.367-47.726,46.666   c16.811,29.098,40.626,52.309,68.354,68.359C280.494,509.85,295.892,493.449,309.886,477.42z"/>
	<path emotion="loathing" fill="#DE00DE" d="M309.908,477.424L357.512,362.5l-114.923,47.604   C255.194,440.504,279.509,464.821,309.908,477.424z"/>
	<path fill="#D5EEFF" d="M558.778,510.85c-14.687,19.963-32.447,37.871-52.946,52.951   c23.829,13.238,50.635,23.32,81.135,28.146C581.602,560.807,571.586,534.17,558.778,510.85z"/>
	<path emotion="distraction" fill="#A5DBFF" d="M558.778,510.85c-11.147-20.301-24.416-38.08-38.608-54.084   c-16.048,27.732-39.248,51.559-68.336,68.377c16.188,14.283,34.051,27.576,53.997,38.658   C526.329,548.721,544.094,530.811,558.778,510.85z"/>
	<path emotion="surprise" fill="#59BDFF" d="M472.438,410.096c-12.604,30.402-36.921,54.723-67.32,67.328   c14,16.035,29.399,32.441,46.716,47.719c29.088-16.818,52.288-40.645,68.336-68.377   C504.821,439.465,488.407,424.221,472.438,410.096z"/>
	<path emotion="amazement" fill="#0089E0" d="M472.438,410.104L357.512,362.5l47.604,114.924   C435.518,464.821,459.829,440.504,472.438,410.104z"/>
	<path fill="#C5FFC5" d="M558.801,214.167c13.237-23.829,23.319-50.634,28.146-81.132   c-31.144,5.362-57.778,15.38-81.103,28.188C525.811,175.906,543.721,193.669,558.801,214.167z"/>
	<path emotion="admiration" fill="#00B400" d="M357.512,362.5l114.925-47.604   c-12.604-30.397-36.92-54.715-67.319-67.318L357.512,362.5z"/>
	<path emotion="trust" fill="#54FF54" d="M405.116,247.535c0,0.012,0,0.021-0.002,0.035l-0.003,0.006   c30.396,12.604,54.706,36.908,67.313,67.302c16.034-13.999,32.44-29.401,47.719-46.714c-16.823-29.086-40.647-52.286-68.385-68.329   C434.471,215.173,419.236,231.576,405.116,247.535z"/>
	<path emotion="acceptance" fill="#8CFF8C" d="M520.146,268.164c14.28-16.188,27.571-34.053,38.653-53.998   c-15.08-20.498-32.99-38.264-52.955-52.942c-20.301,11.147-38.08,24.417-54.084,38.611   C479.495,215.878,503.321,239.078,520.146,268.164z"/>
	<path fill="#FFE1C5" d="M209.157,161.228c-23.319-12.811-49.961-22.827-81.104-28.189   c4.828,30.509,14.916,57.321,28.161,81.157C170.896,194.229,188.659,176.313,209.157,161.228z"/>
</g>
<g id="text" className='font-semibold' font-size="14">
	<g>
		<switch><text transform="matrix(1 0 0 1 216 117.1)" id="trsvg33-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg1-zh-hant">樂觀</tspan></text><text transform="matrix(1 0 0 1 216 117.1)" id="trsvg33"><tspan id="trsvg1">Optimism</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 456 117.1)" id="trsvg34-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg2-zh-hant">愛</tspan></text><text transform="matrix(1 0 0 1 456 117.1)" id="trsvg34"><tspan id="trsvg2">Love</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 10 262.6)" id="trsvg35-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg3-zh-hant">挑釁</tspan></text><text transform="matrix(1 0 0 1 10 262.6)" id="trsvg35"><tspan id="trsvg3">Aggressiveness</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 600 262.6)" id="trsvg36-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg4-zh-hant">順從</tspan></text><text transform="matrix(1 0 0 1 600 262.6)" id="trsvg36"><tspan id="trsvg4">Submission</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 45 470.6)" id="trsvg37-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg5-zh-hant">輕蔑</tspan></text><text transform="matrix(1 0 0 1 45 470.6)" id="trsvg37"><tspan id="trsvg5">Contempt</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 600 470.6)" id="trsvg38-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg6-zh-hant">敬畏</tspan></text><text transform="matrix(1 0 0 1 600 470.6)" id="trsvg38"><tspan id="trsvg6">Awe</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 220 619.4)" id="trsvg39-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg7-zh-hant">後悔</tspan></text><text transform="matrix(1 0 0 1 220 619.4)" id="trsvg39"><tspan id="trsvg7">Remorse</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 432 619.4)" id="trsvg40-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg8-zh-hant">不贊同</tspan></text><text transform="matrix(1 0 0 1 432 619.4)" id="trsvg40"><tspan id="trsvg8">Disapproval</tspan></text></switch>
	</g>
	<g>
		<switch><text transform="matrix(1 0 0 1 89 367.2)" id="trsvg41-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg9-zh-hant">煩躁</tspan></text><text transform="matrix(1 0 0 1 89 367.2)" id="trsvg41"><tspan id="trsvg9">Annoyance</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 182 367.2)" id="trsvg42-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg10-zh-hant">憤怒</tspan></text><text transform="matrix(1 0 0 1 182 367.2)" id="trsvg42"><tspan id="trsvg10">Anger</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 251 367.2)" id="trsvg43-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg11-zh-hant">盛怒</tspan></text><text transform="matrix(1 0 0 1 251 367.2)" id="trsvg43"><tspan id="trsvg11">Rage</tspan></text></switch>
	</g>
	<g>
		<switch><text transform="matrix(1 0 0 1 265 311.1)" id="trsvg44-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg12-zh-hant">警戒</tspan></text><text transform="matrix(1 0 0 1 265 311.1)" id="trsvg44"><tspan id="trsvg12">Vigilance</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 215 250.1)" id="trsvg45-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg13-zh-hant">期待</tspan></text><text transform="matrix(1 0 0 1 215 250.1)" id="trsvg45"><tspan id="trsvg13">Anticipation</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 178 212.1)" id="trsvg46-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg14-zh-hant">有興趣</tspan></text><text transform="matrix(1 0 0 1 178 212.1)" id="trsvg46"><tspan id="trsvg14">Interest</tspan></text></switch>
	</g>
	<g>
		<switch><text transform="matrix(1 0 0 1 332 273)" id="trsvg47-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg15-zh-hant">狂喜</tspan></text><text transform="matrix(1 0 0 1 332 273)" id="trsvg47"><tspan id="trsvg15">Ecstasy</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 346 214)" id="trsvg48-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg16-zh-hant">喜悅</tspan></text><text transform="matrix(1 0 0 1 346 214)" id="trsvg48"><tspan id="trsvg16">Joy</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 329 149)" id="trsvg49-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg17-zh-hant">平靜</tspan></text><text transform="matrix(1 0 0 1 329 149)" id="trsvg49"><tspan id="trsvg17">Serenity</tspan></text></switch>
	</g>
	<g>
		<switch><text transform="matrix(1 0 0 1 387 311.1)" id="trsvg50-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg18-zh-hant">敬佩</tspan></text><text transform="matrix(1 0 0 1 387 311.1)" id="trsvg50"><tspan id="trsvg18">Admiration</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 452 250.1)" id="trsvg51-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg19-zh-hant">信任</tspan></text><text transform="matrix(1 0 0 1 452 250.1)" id="trsvg51"><tspan id="trsvg19">Trust</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 471 212.1)" id="trsvg52-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg20-zh-hant">接納</tspan></text><text transform="matrix(1 0 0 1 471 212.1)" id="trsvg52"><tspan id="trsvg20">Acceptance</tspan></text></switch>
	</g>
	<g>
		<switch><text transform="matrix(1 0 0 1 428 367.2)" id="trsvg53-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg21-zh-hant">恐懼</tspan></text><text transform="matrix(1 0 0 1 428 367.2)" id="trsvg53"><tspan id="trsvg21">Terror</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 498 367.2)" id="trsvg54-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg22-zh-hant">害怕</tspan></text><text transform="matrix(1 0 0 1 498 367.2)" id="trsvg54"><tspan id="trsvg22">Fear</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 550 367.2)" id="trsvg55-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg23-zh-hant">憂慮</tspan></text><text transform="matrix(1 0 0 1 550 367.2)" id="trsvg55"><tspan id="trsvg23">Apprehension</tspan></text></switch>
	</g>
	<g>
		<switch><text transform="matrix(1 0 0 1 385 423.1)" id="trsvg56-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg24-zh-hant">驚奇</tspan></text><text transform="matrix(1 0 0 1 385 423.1)" id="trsvg56"><tspan id="trsvg24">Amazement</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 440 475.4)" id="trsvg57-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg25-zh-hant">驚喜</tspan></text><text transform="matrix(1 0 0 1 440 475.4)" id="trsvg57"><tspan id="trsvg25">Surprise</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 470 525.4)" id="trsvg58-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg26-zh-hant">分心</tspan></text><text transform="matrix(1 0 0 1 470 525.4)" id="trsvg58"><tspan id="trsvg26">Distraction</tspan></text></switch>
	</g>
	<g>
		<switch><text transform="matrix(1 0 0 1 315 583)" id="trsvg59-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg27-zh-hant">沉思</tspan></text><text transform="matrix(1 0 0 1 315 583)" id="trsvg59"><tspan id="trsvg27">Pensiveness</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 334 520)" id="trsvg60-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg28-zh-hant">難過</tspan></text><text transform="matrix(1 0 0 1 334 520)" id="trsvg60"><tspan id="trsvg28">Sadness</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 344 463)" fill="#FFF" id="trsvg61-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg29-zh-hant">悲傷</tspan></text><text transform="matrix(1 0 0 1 344 463)" fill="#FFF" id="trsvg61"><tspan id="trsvg29">Grief</tspan></text></switch>
	</g>
	<g>
		<switch><text transform="matrix(1 0 0 1 173 525.4)" id="trsvg62-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg30-zh-hant">無聊</tspan></text><text transform="matrix(1 0 0 1 173 525.4)" id="trsvg62"><tspan id="trsvg30">Boredom</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 224 475.4)" id="trsvg63-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg31-zh-hant">噁心</tspan></text><text transform="matrix(1 0 0 1 224 475.4)" id="trsvg63"><tspan id="trsvg31">Disgust</tspan></text></switch>
		<switch><text transform="matrix(1 0 0 1 269 423.1)" id="trsvg64-zh-hant" systemLanguage="zh_HANT"><tspan id="trsvg32-zh-hant">嫌惡</tspan></text><text transform="matrix(1 0 0 1 269 423.1)" id="trsvg64"><tspan id="trsvg32">Loathing</tspan></text></switch>
	</g>
</g>
</svg>
    </div>
  )
}

export default plutchikWheel