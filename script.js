/*
Edvards Dergačevs ED19027
*/

var data = [{"group":"Latvians", "stat1925":{"year":1925, "number":"1,354,126", "procentage":73.4}, "stat1935":{"year":1935, "number":"1,472,612", "procentage":75.5}, "stat1959":{"year":1959, "number":"1,297,881", "procentage":62.0}, "stat1970":{"year":1970, "number":"1,341,805", "procentage":56.8}, "stat1979":{"year":1979, "number":"1,344,105", "procentage":73.4}, "stat1989":{"year":1989, "number":"1,387,757", "procentage":52.0}, "stat2000":{"year":2000, "number":"1,370,703", "procentage":57.7}, "stat2011":{"year":2011, "number":"1,285,136", "procentage":62.1}, "stat2018":{"year":2018, "number":"1,202,781", "procentage":62.2}}
,
{"group":"Russians", "stat1925":{"year":1925, "number":"193,648", "procentage":10.5}, "stat1935":{"year":1935, "number":"206,499", "procentage":10.6}, "stat1959":{"year":1959, "number":"556,448", "procentage":26.6}, "stat1970":{"year":1970, "number":"704,599", "procentage":29.8}, "stat1979":{"year":1979, "number":"821,464", "procentage":32.8}, "stat1989":{"year":1989, "number":"905,515", "procentage":34.0}, "stat2000":{"year":2000, "number":"703,243", "procentage":29.6}, "stat2011":{"year":2011, "number":"557,119", "procentage":26.9}, "stat2018":{"year":2018, "number":"487,250", "procentage":25.2}}
,
{"group":"Belarusians", "stat1925":{"year":1925, "number":"38,010", "procentage":2.1}, "stat1935":{"year":1935, "number":"26,867", "procentage":1.4}, "stat1959":{"year":1959, "number":"61,587", "procentage":2.9}, "stat1970":{"year":1970, "number":"94,898", "procentage":4.0}, "stat1979":{"year":1979, "number":"111,505", "procentage":4.5}, "stat1989":{"year":1989, "number":"119,702", "procentage":4.5}, "stat2000":{"year":2000, "number":"97,150", "procentage":4.1}, "stat2011":{"year":2011, "number":"68,202", "procentage":3.3}, "stat2018":{"year":2018, "number":"62,713", "procentage":3.2}}
,
{"group":"Ukrainians", "stat1925":{"year":1925, "number":"512", "procentage":0.03}, "stat1935":{"year":1935, "number":"1,844", "procentage":0.09}, "stat1959":{"year":1959, "number":"29,440", "procentage":1.4}, "stat1970":{"year":1970, "number":"53,461", "procentage":2.3}, "stat1979":{"year":1979, "number":"66,703", "procentage":2.7}, "stat1989":{"year":1989, "number":"92,101", "procentage":3.5}, "stat2000":{"year":2000, "number":"63,644", "procentage":2.7}, "stat2011":{"year":2011, "number":"45,798", "procentage":2.2}, "stat2018":{"year":2018, "number":"43,128", "procentage":2.2}}
,
{"group":"Poles", "stat1925":{"year":1925, "number":"51,143", "procentage":2.8}, "stat1935":{"year":1935, "number":"48,949", "procentage":2.5}, "stat1959":{"year":1959, "number":"59,774", "procentage":2.9}, "stat1970":{"year":1970, "number":"63,045", "procentage":2.7}, "stat1979":{"year":1979, "number":"62,690", "procentage":2.5}, "stat1989":{"year":1989, "number":"60,4165", "procentage":2.3}, "stat2000":{"year":2000, "number":"59,505", "procentage":2.5}, "stat2011":{"year":2011, "number":"44,772", "procentage":2.2}, "stat2018":{"year":2018, "number":"39,687", "procentage":2.1}}
,
{"group":"Lithuanians", "stat1925":{"year":1925, "number":"23,192", "procentage":1.3}, "stat1935":{"year":1935, "number":"22,913", "procentage":1.2}, "stat1959":{"year":1959, "number":"32,383", "procentage":1.6}, "stat1970":{"year":1970, "number":"40,589", "procentage":1.7}, "stat1979":{"year":1979, "number":"37,818", "procentage":1.5}, "stat1989":{"year":1989, "number":"34,630", "procentage":1.3}, "stat2000":{"year":2000, "number":"33,430", "procentage":1.4}, "stat2011":{"year":2011, "number":"24,479", "procentage":1.2}, "stat2018":{"year":2018, "number":"22,831", "procentage":1.2}}
,
{"group":"Roma", "stat1925":{"year":1925, "number":"2,870", "procentage":0.2}, "stat1935":{"year":1935, "number":"3,839", "procentage":0.2}, "stat1959":{"year":1959, "number":"4,301", "procentage":0.2}, "stat1970":{"year":1970, "number":"5,427", "procentage":0.2}, "stat1979":{"year":1979, "number":"6,134", "procentage":0.3}, "stat1989":{"year":1989, "number":"7,044", "procentage":0.3}, "stat2000":{"year":2000, "number":"8,205", "procentage":0.3}, "stat2011":{"year":2011, "number":"6,489", "procentage":0.3}, "stat2018":{"year":2018, "number":"5,082", "procentage":0.3}}
,
{"group":"Jews", "stat1925":{"year":1925, "number":"95,675", "procentage":5.2}, "stat1935":{"year":1935, "number":"93,479", "procentage":4.8}, "stat1959":{"year":1959, "number":"36,592", "procentage":1.8}, "stat1970":{"year":1970, "number":"36,680", "procentage":1.6}, "stat1979":{"year":1979, "number":"28,331", "procentage":1.1}, "stat1989":{"year":1989, "number":"22,897", "procentage":0.9}, "stat2000":{"year":2000, "number":"10,385", "procentage":0.4}, "stat2011":{"year":2011, "number":"6,437", "procentage":0.3}, "stat2018":{"year":2018, "number":"4,721", "procentage":0.2}}
,
{"group":"Germans", "stat1925":{"year":1925, "number":"70,964", "procentage":3.8}, "stat1935":{"year":1935, "number":"62,144", "procentage":3.2}, "stat1959":{"year":1959, "number":"1,609", "procentage":0.08}, "stat1970":{"year":1970, "number":"5,413", "procentage":0.2}, "stat1979":{"year":1979, "number":"3,299", "procentage":0.1}, "stat1989":{"year":1989, "number":"3,783", "procentage":0.1}, "stat2000":{"year":2000, "number":"3,465", "procentage":0.1}, "stat2011":{"year":2011, "number":"3,042", "procentage":0.1}, "stat2018":{"year":2018, "number":"2,554", "procentage":0.1}}
,
{"group":"Estonians", "stat1925":{"year":1925, "number":"7,893", "procentage":0.4}, "stat1935":{"year":1935, "number":"7,014", "procentage":0.4}, "stat1959":{"year":1959, "number":"4,610", "procentage":0.2}, "stat1970":{"year":1970, "number":"4,334", "procentage":0.2}, "stat1979":{"year":1979, "number":"3,681", "procentage":0.2}, "stat1989":{"year":1989, "number":"3,312", "procentage":0.1}, "stat2000":{"year":2000, "number":"2,652", "procentage":0.1}, "stat2011":{"year":2011, "number":"2,007", "procentage":0.1}, "stat2018":{"year":2018, "number":"1,676", "procentage":0.09}}
,
{"group":"Livonians", "stat1925":{"year":1925, "number":"1,268", "procentage":0.07}, "stat1935":{"year":1935, "number":"944", "procentage":0.05}, "stat1959":{"year":1959, "number":"185", "procentage":0.01}, "stat1970":{"year":1970, "number":"48", "procentage":0.0}, "stat1979":{"year":1979, "number":"107", "procentage":0.0}, "stat1989":{"year":1989, "number":"135", "procentage":0.01}, "stat2000":{"year":2000, "number":"180", "procentage":0.01}, "stat2011":{"year":2011, "number":"250", "procentage":0.01}, "stat2018":{"year":2018, "number":"161", "procentage":0.01}}
,
{"group":"Others", "stat1925":{"year":1925, "number":"5,504", "procentage":0.3}, "stat1935":{"year":1935, "number":"3,398", "procentage":0.2}, "stat1959":{"year":1959, "number":"8,648", "procentage":0.4}, "stat1970":{"year":1970, "number":"13,828", "procentage":0.6}, "stat1979":{"year":1979, "number":"16,979", "procentage":0.7}, "stat1989":{"year":1989, "number":"29,275", "procentage":1.1}, "stat2000":{"year":2000, "number":"24,824", "procentage":1.1}, "stat2011":{"year":2011, "number":"26,640", "procentage":1.3}, "stat2018":{"year":2018, "number":"61,795", "procentage":3.2}}];

var headerInfo = [1925, 1935, 1959, 1970, 1979, 1989, 2000, 2011, 2018];

var footerInfo = [{"year":1925, "number":"1,844,805"}, {"year":1935, "number":"1,950,502"}, {"year":1959, "number":"2,093,458"}, {"year":1970, "number":"2,364,127"}, {"year":1989, "number":"2,502,816"}, {"year":2000, "number":"2,666,567"}, {"year":1989, "number":"2,377,383"}, {"year":2011, "number":"2,070,371"}, {"year":2018, "number":"1,934,379"}];

function getSelected(fieldID){

    var elements = document.getElementById("group-select").childNodes; 

    var arrayOfSeleced = [];

    for(i=0;i<elements.length;i++)
    {
        if(elements[i].selected){

            arrayOfSeleced.push(elements[i].value)
        }         
    }
    return arrayOfSeleced;          
}

function showList()
{
    var yuntil = document.getElementById("year-until").value;
    var number = document.getElementById("number-select").checked;
    var procentage = document.getElementById("procentage-select").checked;
    var selected = getSelected("class-select");
    
    if (number == true || procentage == true)
    {
        if (selected == "")
        {
            alert("Choose at least one Ethnic group")
        }
        else
        {
            if((yuntil <= 2020 && yuntil >= 1925) || yuntil == "")
            {
                if(number == true && procentage == true)
                {
                    showListHeader();
                    filterOne();
                    showListFooter();
                }
                if(number == true && procentage == false)
                {
                    showListHeader();
                    filterTwo();
                    showListFooter();
                }
                if(number == false && procentage == true)
                {
                    showListHeader();
                    filterThree();
                    showListFooter();
                }
            }
            else
            {
                alert("Input only numbers from 1925 to 2020 or leave field blank")
            }
        }
    }
    else
    {
        alert("Check at least one field: Number or Procentage")
    }
}

function showListHeader() {
    
    var table = $("#List");
    var yuntil = $("#year-until").val();
    var number = $("#number-select");
    var procentage = $("#procentage-select");
    var count = 0;
    
    table.find("caption").remove();
    table.find("tr").remove();
    
    table.append("<tr></tr>");

    $("#List tr").append("<th>Ethnic<br>group</th>");
    $("#List th").attr("rowspan", "2");
    
   
    for (var i = 0; i < 9; i++)
    {
        if (number.prop("checked") == true && procentage.prop("checked") == true)
        {
            if (yuntil >= headerInfo[i])
            {
                $("#List tr").append("<th>"+ headerInfo[i] +"</th>");
                $("#List th:last-child").attr("colspan", "2");
                count++;
            }
            else if(yuntil == "")
            {
                $("#List tr").append("<th>"+ headerInfo[i] +"</th>");
                $("#List th:last-child").attr("colspan", "2");
                count++;
            }
        }
        else
        {
            if (yuntil >= headerInfo[i])
            {
                $("#List tr").append("<th>"+ headerInfo[i] +"</th>");
                count++;
            }
            else if(yuntil == "")
            {
                $("#List tr").append("<th>"+ headerInfo[i] +"</th>");
                count++;
            }
        }
    }
    
    table.append("<tr></tr>");

    for (var i = 0; i < count; i++)
    {
        if (number.prop("checked") == true && procentage.prop("checked") == true)
        {
            $("#List tr:last-child").append("<th>Number</th>");
            $("#List tr:last-child").append("<th>%</th>");
        }
        
        if (number.prop("checked") == true && procentage.prop("checked") == false)
        {
            $("#List tr:last-child").append("<th>Number</th>");
        }
        
        if (number.prop("checked") == false && procentage.prop("checked") == true)
        {
            $("#List tr:last-child").append("<th>%</th>");
        }
    }
}

function filterOne()
{
    var table = document.getElementById("List");
    var yuntil = document.getElementById("year-until").value;
    var selected = getSelected("group-select");
    
    for (var i in data)
    {   
        for (var j in selected)
        {
            if(data[i].group == selected[j])
            {
                var row = document.createElement("tr");
                
                var tdata = document.createElement("td");
                tdata.innerHTML = data[i].group;
                row.appendChild(tdata);
                
                if (yuntil >= data[i].stat1925.year || yuntil == "")
                {
                    for(var n=0; n<2; n++)
                    {
                        if(n==0)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1925.number;
                            row.appendChild(tdata);
                        }
                        if(n==1)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1925.procentage;
                            row.appendChild(tdata);
                        }
                    }
                }
                if (yuntil >= data[i].stat1935.year || yuntil == "")
                {
                    for(var n=0; n<2; n++)
                    {
                        if(n==0)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1935.number;
                            row.appendChild(tdata);
                        }
                        if(n==1)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1935.procentage;
                            row.appendChild(tdata);
                        }
                    }
                }
                if (yuntil >= data[i].stat1959.year || yuntil == "")
                {
                    for(var n=0; n<2; n++)
                    {
                        if(n==0)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1959.number;
                            row.appendChild(tdata);
                        }
                        if(n==1)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1959.procentage;
                            row.appendChild(tdata);
                        }
                    }
                }
                if (yuntil >= data[i].stat1970.year || yuntil == "")
                {
                    for(var n=0; n<2; n++)
                    {
                        if(n==0)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1970.number;
                            row.appendChild(tdata);
                        }
                        if(n==1)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1970.procentage;
                            row.appendChild(tdata);
                        }
                    }
                }
                if (yuntil >= data[i].stat1979.year || yuntil == "")
                {
                    for(var n=0; n<2; n++)
                    {
                        if(n==0)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1979.number;
                            row.appendChild(tdata);
                        }
                        if(n==1)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1979.procentage;
                            row.appendChild(tdata);
                        }
                    }
                }
                if (yuntil >= data[i].stat1989.year || yuntil == "")
                {
                    for(var n=0; n<2; n++)
                    {
                        if(n==0)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1989.number;
                            row.appendChild(tdata);
                        }
                        if(n==1)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat1989.procentage;
                            row.appendChild(tdata);
                        }
                    }
                }
                if (yuntil >= data[i].stat2000.year || yuntil == "")
                {
                    for(var n=0; n<2; n++)
                    {
                        if(n==0)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat2000.number;
                            row.appendChild(tdata);
                        }
                        if(n==1)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat2000.procentage;
                            row.appendChild(tdata);
                        }
                    }
                }
                if (yuntil >= data[i].stat2011.year || yuntil == "")
                {
                    for(var n=0; n<2; n++)
                    {
                        if(n==0)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat2011.number;
                            row.appendChild(tdata);
                        }
                        if(n==1)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat2011.procentage;
                            row.appendChild(tdata);
                        }
                    }
                }
                if (yuntil >= data[i].stat2018.year || yuntil == "")
                {
                    for(var n=0; n<2; n++)
                    {
                        if(n==0)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat2018.number;
                            row.appendChild(tdata);
                        }
                        if(n==1)
                        {
                            var tdata = document.createElement("td");
                            tdata.innerHTML = data[i].stat2018.procentage;
                            row.appendChild(tdata);
                        }
                    }
                }
                table.appendChild(row);
            }
        }
    }
}

function filterTwo()
{
    var table = document.getElementById("List");
    var yuntil = document.getElementById("year-until").value;
    var selected = getSelected("group-select");
    
    for (var i in data)
    {   
        for (var j in selected)
        {
            if(data[i].group == selected[j])
            {
                var row = document.createElement("tr");
                
                var tdata = document.createElement("td");
                tdata.innerHTML = data[i].group;
                row.appendChild(tdata);
                
                if (yuntil >= data[i].stat1925.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1925.number;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat1935.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1935.number;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat1959.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1959.number;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat1970.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1970.number;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat1979.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1979.number;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat1989.year || yuntil == "")
                {

                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1989.number;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat2000.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat2000.number;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat2011.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat2011.number;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat2018.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat2018.number;
                    row.appendChild(tdata);
                }
                table.appendChild(row);
            }
        }
    }
}

function filterThree()
{
    var table = document.getElementById("List");
    var yuntil = document.getElementById("year-until").value;
    var selected = getSelected("group-select");
    
    for (var i in data)
    {   
        for (var j in selected)
        {
            if(data[i].group == selected[j])
            {
                var row = document.createElement("tr");
                
                var tdata = document.createElement("td");
                tdata.innerHTML = data[i].group;
                row.appendChild(tdata);
                
                if (yuntil >= data[i].stat1925.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1925.procentage;
                    row.appendChild(tdata);

                }
                if (yuntil >= data[i].stat1935.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1935.procentage;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat1959.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1959.procentage;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat1970.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1970.procentage;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat1979.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1979.procentage;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat1989.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat1989.procentage;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat2000.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat2000.procentage;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat2011.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat2011.procentage;
                    row.appendChild(tdata);
                }
                if (yuntil >= data[i].stat2018.year || yuntil == "")
                {
                    var tdata = document.createElement("td");
                    tdata.innerHTML = data[i].stat2018.procentage;
                    row.appendChild(tdata);
                }
                table.appendChild(row);
            }
        }
    }
}

function showListFooter() {
    
    var table = $("#List");
    var yuntil = $("#year-until").val();
    var number = $("#number-select");
    var procentage = $("#procentage-select");
    
    table.append("<tr></tr>");
    $("#List tr:last-child").attr("id", "footer");
    $("#List #footer").append("<th>Total</th>");

    for (var i = 0; i < 9; i++)
    {
        if (number.prop("checked") == true && procentage.prop("checked") == true)
        {
            if (yuntil >= footerInfo[i].year)
            {
                $("#List tr:last-child").append("<th>"+ footerInfo[i].number +"</th>");
                $("#List th:last-child").attr("colspan", "2");
            }
            else if(yuntil == "")
            {
                $("#List tr:last-child").append("<th>"+ footerInfo[i].number +"</th>");
                $("#List th:last-child").attr("colspan", "2");
            }
        }
        else
        {
            if (yuntil >= footerInfo[i].year)
            {
                $("#List tr:last-child").append("<th>"+ footerInfo[i].number +"</th>");
            }
            else if(yuntil == "")
            {
                $("#List tr:last-child").append("<th>"+ footerInfo[i].number +"</th>");
            }
        }
    }
}