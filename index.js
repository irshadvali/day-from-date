module.exports.getDay = dayDate =>  {
    let dateChecker= /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:[0-1][0-9]|[2-9]\d)?\d{2})$/;
    if(dateChecker.test(dayDate)){
        let monthCode; 
        let monthArray; 
        let dayValue = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"]
            let yearValue; 
        let lpYearValue; 
      
        tempDayDate = dayDate.split(/[.\ - _/]/)
        let numDate = parseInt(tempDayDate[0]); 
        let  numMonth = parseInt(tempDayDate[1])-1; 
        let numYear = parseInt(tempDayDate[2]); 
        yearValue = parseInt(tempDayDate[2].slice(2, 4)); 
        lpYearValue = parseInt(yearValue/4); 
        if (numYear % 4 === 0) {
        monthArray = [0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6]; 
        }
        else {
        monthArray = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6]; 
        }
      
        monthCode = monthArray[numMonth]; //month code
    
        let century_code;
        if(numYear<100){
            century_code = 6
        }
        else{
            let yr; 
            yr = parseInt(tempDayDate[2].slice(0, -2))*100;
            
            if ((yr + 100) % 400 === 0) {
                century_code = 0   
            }
            else if ((yr + 0) % 400 === 0) {
                century_code = 6  
            }
            else if ((yr + 300) % 400 === 0) {
                century_code = 4  
            }
            else if ((yr + 200) % 400 === 0) {
                century_code = 2  
            }
        }
        
        let calulateData = (numDate + monthCode + yearValue + lpYearValue + century_code) % 7; 
        console.log(dayValue[calulateData])
        return dayValue[calulateData]; 
    }
    else{
        alert("Date format should be 03/11/2014 or 03-11-2014")
    }
    
    }; 