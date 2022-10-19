function mainbox(){
    return `<div style="display:flex;justify-content: center;margin-top: 40px;align-items: center;" id="change">
    <h6 style="color: white;display: inline;font-size: 20px;font-family: sans-serif;font-weight: 700;" id="month1">Monthly</h6>
    <div style="width: 60px;height: 30px;border-radius: 20px;margin: 0px 10px;background-color: #ef3d4a;  "><i id="ball" style="color: white;font-size: 23px;margin: 4px 3px;" class="fa-solid fa-circle" ></i></div>
    <h6 style="color: white;display: inline;font-size: 20px;font-family: sans-serif;font-weight: 700;" id="year">Yearly</h6>
</div>
<div style="color: white;background-color:  #ec008c;width: 180px;height: 30px;margin: 0px 0px -86px 1080px;display: flex;align-items: center;justify-content: center;font-family: sans-serif;font-size: 15px;font-weight: 700;">BEST OPPORTUNITY</div>
<div id="content">
    <div>
       <div> <h1>Standard</h1></div>
       <p style="color: white;font-size: 18px;font-family: sans-serif;font-weight: 800;">Standard includes:</p>
       <p><i class="fa-solid fa-check"></i>Limited core library of 2,500 courses</p>
       <p><i class="fa-solid fa-check"></i>Skill and Role assessments</p>
       <p><i  class="fa-solid fa-check"></i>Curated learning paths and channels</p>

       <div style="display: flex;justify-content: center;align-items: center;gap: 10px;margin-top: 150px;">
           <div><h1 class="amount amount1">₹ 1,499 </h1></div>
           <div style=" margin-top: 25px "><p class="duration duration1">/ monthly</p></div>
       </div >
       <div class="lastlinediv"><p class="lastline1"></p><p class="lastline1spa"></p></div>
       <button class="btndown" style="border: 1px solid white;background-color:#181818 ;">BEGIN WITH STANDARDS</button>
       <div class="freetrial"><p>Or</p><p style="color: #ec008c;">start a FREE trial</p></div>
    </div>

    <div style="  border: 1px solid #ec008c; ">
       
       <div> <h1>Premium</h1></div>
       <p style="color: #e03052;font-size: 18px;font-family: sans-serif;font-weight: 600;">Includes everything in Standard and more:</p>
       <p><i class="fa-solid fa-check"></i>Access to full library of 7,000+ courses including advanced content, niche topics and insightful recordings of past tech conferences</p>
       <p><i class="fa-solid fa-check"></i>Hands-on content and coding projects</p>
       <p><i class="fa-solid fa-check"></i>Certification exam prep for industry-leading certifications</p>
       <p><i class="fa-solid fa-check"></i>Coding challenges</p>
       <div style="display: flex;justify-content: center;align-items: center;gap: 10px;margin-top: 50px;">
        <div><h1  class="amount amount2">₹ 2,299</h1></div>
        <div style=" margin-top: 25px "><p class="duration duration2">/ monthly</p></div>
    </div>
    <div class="lastlinediv"><p class="lastline2"></p><p class="lastline2spa"></p></div>
    <button class="btndown" style="background-color: #d44038;">BEGIN WITH PREMIUM</button>
    <div class="freetrial"><p>Or</p><p style="color: #ec008c;">start a FREE trial</p></div>
    </div>   
</div>`
}
export {mainbox}