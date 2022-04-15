
export function isQuestionCompleted(question){
    if(Object.keys(question.choice).length == 0){
        return false
    }
    else{
        return true
    }
}

export function getProgress(survey) {

    var completed = 0
    survey.questions.forEach((question) => {
      if (isQuestionCompleted(question)) {
        completed += 1
      }
    })
    return Math.round((completed / survey.questions.length) * 100)
    // return []
  }
const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
export function getPercentiles(data,percentiles){
  let matches = []
  percentiles.forEach((value,index)=>{
    if(data==value){
      matches.push(index)
    }
  })
  return average(matches)

}
  
export function gradeSurvey(surveyResponse){
  var totalValue:number =0
  var message:string =""
  var error = false;
  var data

  if(surveyResponse.surveyid==0){
    surveyResponse.questions.forEach((question)=>{
      totalValue += question.choice.value
    })
    if(totalValue>=0&&totalValue<=10){
      message="These ups and downs are considered normal"
    }
    if(totalValue>=11&&totalValue<=16){
      message="Mild mood disturbance"
    }
    if(totalValue>=17&&totalValue<=20){
      message = "Borderline clinical depression"
    }
    if(totalValue>=21&&totalValue<=30){
      message = "Moderate depression"
    }
    if(totalValue>=31&&totalValue<=40){
      message = "Severe depression"
    }
    if(totalValue>=40){
      message = "Extreme Depression"
    }
  }

// Other depressive syndrome is suggested if:
// •	 Of the 9 items, between 2 to 4 are checked as at least‘more than h
  if(surveyResponse.surveyid==1){
    surveyResponse.questions.forEach((question)=>{
      if(question.id!=9){
        totalValue += question.choice.value
      }
    })
    var moreThanHalf=0;
    var suggestion=""
    surveyResponse.questions.forEach((question)=>{
      if(question.choice.value>=2){
        moreThanHalf += 1
      }
    })
    
    if(moreThanHalf>=2&&moreThanHalf<=4){
      suggestion="Other Depressive Syndrome"
    }
    if((surveyResponse.questions[0].choice.value >= 2)||(surveyResponse.questions[1].choice.value >= 2)||(moreThanHalf>=5)){
      suggestion = "Major depressive disorder (MDD)"
    }

    if(totalValue>=0&&totalValue<=4){
      message="No or minimal depression"
    }
    if(totalValue>=5&&totalValue<=9){
      message="Mild Depression"
    }
    if(totalValue>=10&&totalValue<=14){
      message = "Moderate Depression"
    }
    if(totalValue>=15&&totalValue<=19){
      message = "Moderately Severe Depression"
    }
    if(totalValue>=20&&totalValue<=27){
      message = "Severe depression"
    }

  }
  if(surveyResponse.surveyid==2){
    let result = [
      {scale:"Extraversion",value:0,percentile:null},
      {scale:"Agreeableness",value:0},
      {scale:"Conscientiousness",value:0},
      {scale:"Emotional Stability",value:0},
      {scale:"Intellect/Imagination",value:0},
    ]
    surveyResponse.questions.forEach((question)=>{
      let scale = parseInt((question.key).split('')[0])

      let scoreDirection = (question.key).split('')[1]
      if(scoreDirection=="+"){
        result[scale-1].value += question.choice.value
      }
      else if(scoreDirection=="-"){
        // "Very Inaccurate" is assigned a value of 5, "Moderately Inaccurate" a value of 4, "Neither Inaccurate nor Accurate" a 3, "Moderately Accurate" a 2, and "Very Accurate" a value of 1.
        if(question.choice.title=="Very Inaccurate"){
          result[scale-1].value += 5
        }
        if(question.choice.title=="Moderately Inaccurate"){
          result[scale-1].value += 4
        }
        if(question.choice.title=="Neither Accurate Nor Inaccurate"){
          result[scale-1].value += 3
        }
        if(question.choice.title=="Moderately Accurate"){
          result[scale-1].value += 2
        }
        if(question.choice.title=="Very Accurate"){
          result[scale-1].value += 1
        }
      }
    })
    result.forEach((x)=>{
      if(x.scale=="Extraversion"){
        x.percentile = getPercentiles(x.value,EXT_percentiles)
      }
      if(x.scale=="Emotional Stability"){
        x.percentile=getPercentiles(x.value,EST_percentiles)
      }
      if(x.scale=="Agreeableness"){
        x.percentile=getPercentiles(x.value,ARG_percentiles)
      }
      if(x.scale=="Conscientiousness"){
        x.percentile=getPercentiles(x.value,CSN_percentiles)
      }
      if(x.scale=="Intellect/Imagination"){
        x.percentile=getPercentiles(x.value,OPN_percentiles)
      }
      
    })
    data=result
    // value = index * key ) 0*-1 = 5
  }
  if(surveyResponse.surveyid==3){
    surveyResponse.questions.forEach((question)=>{
      totalValue += question.choice.value
    })
    if(totalValue>=0&&totalValue<=4){
      message="No or minimal anxiety"
    }
    if(totalValue>=5&&totalValue<=9){
      message="Mild Anxiety"
    }
    if(totalValue>=10&&totalValue<=14){
      message = "Moderate Anxiety"
    }
    if(totalValue>=15&&totalValue<=21){
      message = "Severe Anxiety"
    }

  }

  if(!error){
    let dateCompleted = new Date()
    return {data,totalValue,message,suggestion,dateCompleted}
  }

}

let EXT_percentiles = [21, 23, 24, 24, 25, 25, 25, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 33, 33, 33, 33, 33, 33, 33, 33, 34, 34, 34, 34, 34, 35, 35, 35, 35, 36, 36, 36, 37, 38, 39, 50]
let EST_percentiles = [15, 17, 18, 19, 19, 20, 20, 21, 21, 22, 22, 22, 23, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 33, 33, 33, 33, 33, 34, 34, 34, 34, 34, 35, 35, 35, 35, 35, 36, 36, 36, 36, 37, 37, 37, 37, 38, 38, 38, 39, 39, 39, 40, 40, 41, 41, 42, 42, 43, 44, 50]
let ARG_percentiles = [21, 23, 24, 25, 26, 26, 26, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 35, 35, 35, 35, 35, 35, 36, 36, 36, 36, 36, 37, 37, 37, 38, 38, 39, 40, 50]
let CSN_percentiles = [20, 23, 24, 24, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 34, 34, 34, 34, 34, 34, 34, 34, 35, 35, 35, 35, 35, 35, 36, 36, 36, 36, 37, 37, 37, 38, 38, 39, 39, 41, 50]
let OPN_percentiles = [21, 24, 25, 26, 26, 27, 27, 27, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 30, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 36, 36, 36, 36, 36, 36, 36, 36, 37, 37, 37, 37, 37, 37, 37, 38, 38, 38, 38, 38, 39, 39, 40, 41, 50]
