---
---

var todayInserted = false;
var prevDate = "";

var shownDates = [];

var makeRow = function (page, tableName) {
  // Because I changed from five params to an object late.
  var url = page.url;
  var title = page.title;
  var categories = page.categories;
  var due = page.date;
  var after = page.release;

  console.log("Categories: " + categories);
  
  var activity;
  if (page.nolink == "true") {
    activity = title;
  } else {
    activity = "<a href='" + url + "'>" + title + "</a>";  
  }

  var icon      = getIcon(categories);
  var filling   = false;
  var today     = moment();
  var todayString = today.format("ddd, MMM Do");
  var m         = moment();
  var isPast    = false;
  
  var pie = "{{site.moustache}}";
  pie += "<tr>";
  pie += "<td>[[&due]]</td>";
  pie += "<td>[[&icon]] &nbsp; [[&activity]]</td>";
  pie += "</tr>";

  // If it is an assignment or a class with a date
  
  if (isValidDueDate(due)
      && isReleased(after))  {
    m = parseDueDate(due);
    
    var diff = m.diff(moment(), 'days');
    var difference = "";
    // This 'if' is redundant now... 20131118
    if (diff >= 0) {
      difference = m.from(moment());
    } else {
      // So we can have spans in the past.
      difference = m.from(moment());
    }
  
  if (categories.contains("interact")) {
    // console.log("Categories: " + categories);
    difference = "<span class='label label-info pull-right'>" 
                  + "in class"
                  + "</span>";
  } else {
    /* Assume anything not explicitly in-class is due at some point? */
    if (isReleased(after)) {  
      difference = "<span class='label " + 
          getRangeColor(m) + 
          " pull-right'>" +
          difference + 
          "</span>";
    }  
    
  }  
  
  if (page.nolink == "true") {
    difference = "";
  }
  
  // Set the date string up, and if it has already been shown,
  // remove it from the HTML. That way, we only see any one given 
  // date once even if there are multiple entries for the day.
  var dateString = m.format("ddd, MMM Do");
  if (member(shownDates, dateString)) {
    dateString = "";
  }
  shownDates.push(dateString);
  
  
  var filling = { due: dateString,
                  activity: activity + difference, // onlyInFuture(due, difference)
                  icon: icon,
                };
  }

  if (filling) {
    
    // Insert a YOU ARE HERE
    if (!todayInserted && (today.diff(m, 'hours') - 1 >= 0)) {

      var here = "<tr class='warning'><td width='20%'>" +
        todayString +
        "</td><td>" +
        "<b>You Are Here</b> " +
        "&nbsp;&nbsp;" +
        awesome("hand-o-left") +
        "</td></tr>";
      $("#" + tableName + " > tbody:last").append(here);      
      todayInserted = true;
    }
    
    // Insert the row first
    var row = Mustache.to_html(pie, filling);
    $("#" + tableName + " > tbody:last").append(row);
    
  }

};