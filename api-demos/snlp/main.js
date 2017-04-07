function submit(e) {
  // pressed enter
  if(e.keyCode == 13) {
    clearGraph()
    var input = document.getElementById('subreddit')
    var subreddit_name = input.value   
    input.value = ''
    
    var xhr = new XMLHttpRequest()
    xhr.open("POST", config.DATA_URL+"/reddit/comments")
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200)
        analyze(this.responseText)
    }
    xhr.send(JSON.stringify(
      {
        subreddit_name: subreddit_name,
        comment_limit: 25
      }
    ))
  }
}

function analyze(text) {
    var xhr = new XMLHttpRequest()
    xhr.open("POST", config.SNLP_URL+"/sentiment")
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onreadystatechange = function() {
      if(this.readyState === 4) {
        var sentiment = JSON.parse(this.responseText)
        setGraph(sentiment.pos, sentiment.neu, sentiment.neg)
      }
    }
    xhr.send(JSON.stringify(
      {
        text: text
      }
    ))
}

function setGraph(pos, neu, neg) {
    var posbar = document.getElementById('pos')
    var neubar = document.getElementById('neu')
    var negbar = document.getElementById('neg')

    posbar.innerHTML = 'Positive content:<a style="background:green">'+(pos*100).toFixed(2)+'%</a>'
    posbar.style.width = (pos*100)+"%"

    neubar.innerHTML = 'Neutral content:<a style="background:grey">'+(neu*100).toFixed(2)+'%</a>'
    neubar.style.width = (neu*100)+"%"

    negbar.innerHTML = 'Negative Content:<a style="background:red">'+(neg*100).toFixed(2)+'%</a>'
    negbar.style.width = (neg*100)+"%"
}

function clearGraph() {
    document.getElementById('pos').innerHTML = ''
    document.getElementById('neu').innerHTML = ''
    document.getElementById('neg').innerHTML = ''
}
