/**
 * Created by holbech on 14/03/2017.
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-96277325-1', 'auto');
ga('send', 'pageview');


/*
 gitbook.events.bind("page.change", function(e){
    console.log(e)//bortset fra stavefejl virker det, ved endnu ikke hvordan jeg jeg fanger den nuværende "page"
    let exercises = document.querySelectorAll('.js-exercise');
    if(exercises.length>0){
        exercises.forEach(ex=>{
            "use strict";
            let btnSubmit = ex.querySelector('.btnsubmit');
            let btnSolution = ex.querySelector('.btnsolution');
            let feedbackelement = ex.querySelector('.feedbackmessage');
            btnSolution.addEventListener('click', e=>{
                ex.querySelector('.solution').classList.toggle('visible');
            });
            btnSubmit.addEventListener('click', e=>{
                let testCase = eval(ex.querySelector('.testcases').textContent);
                console.log(ex.querySelector('.testcases').textContent, testCase);
                let x;
                try {
                    x = eval(ex.querySelector('textarea').value);
                    console.log(x)
                } catch(error){
                    console.warn(error)
                    feedbackelement.textContent=error;
                    feedbackelement.classList.remove('success');
                    feedbackelement.classList.add('error');
                }


            });
        });
    }
 });
*/
/*
 <div class="js-exercise">
 <h3>Exercise</h3>
 <p class="taskdescription">Grab a reference to the `body` element and store a reference to it in a variable called `bodyElem`</p>
 <p class="feedbackmessage"></p>
 <textarea class="lang-js">let </textarea>
 <div class="testcases">window.tc = function(){
 if(bodyElem!=undefined){
 return true;
 }
 return false;
 }</div>
 <pre class="solution"><code class="lang-js">let bodyElem = document.querySelector('body');</code></pre>
 <button class="btnsubmit">Submit</button>
 <button class="btnsolution">Solution</button>
 </div>
 */
//window.addEventListener
