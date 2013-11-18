---
title: At a Glance
layout: default
---

Good resource: http://startbootstrap.com/3-col-portfolio


<table id="activities" class="table table-striped table-hover">
  <tbody>

  <tr>
    <td width="20%" style="padding: 8px;"><h3>Due</h2></td>
    <td width="80%" style="padding: 8px;"><h3>To Do</h2></td>
  </tr>
</tbody>
</table>

<script>
var todayInserted = false;
var prevDate = "";

var shownDates = [];

var makeRow = function (page) {
  // Because I changed from five params to an object late.
  var url = page.url;
  var title = page.title;
  var category = page.category;
  var due = page.date;
  var after = page.release;

  var activity;
  if (page.nolink == "true") {
    activity = title;
  } else {
    activity = "<a href='" + url + "'>" + title + "</a>";  
  }

  var icon      = getIcon(category);
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
  
  // TODO
  if (url.indexOf("learn") != -1) {
    if (isReleased(after)) {  
      difference = "<span class='label " + 
          getRangeColor(m) + 
          " pull-right'>" +
          difference + 
          "</span>";
    }  
  }
  
  if (url.indexOf("interact") != -1) {
    difference = "<span class='label label-info pull-right'>" 
                  + "in class"
                  + "</span>";
  } // END CLASS    
  
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
      $("#activities > tbody:last").append(here);      
      todayInserted = true;
    }
    
    // Insert the row first
    var row = Mustache.to_html(pie, filling);
    $("#activities > tbody:last").append(row);
    
  }

};

/* Generate an array of page objects */
var pages = [   
{% for page in site.pages  %}
  {% if page.title != "" %}
    {% if (page.url contains "/learn") or (page.url contains "/interact") %}
      {url: "{{site.base}}{{page.url}}", 
      title: "{{page.title}}", 
      category: "{{page.activity}}", 
      date: "{{page.date}}", 
      release: "{{page.release}}",
      nolink: "{{page.nolink}}"},
    {% endif %}    
  {% endif %}
{% endfor %}
];

var sortDueDates = function (a, b) {  
  // Pad out the due dates, so I don't always
  // have to specify an hour. And, so classes will
  // sort correctly.
  if (a.date.length < 8) {a.date = a.date + "0000";}
  if (b.date.length < 8) {b.date = b.date + "0000";}  
  if (a.date > b.date) { return 1; } else { return -1; }
};

// Add the course time to everything
for (var i = 0 ; i < pages.length ; i++ ) {
  date = pages[i].date;
  //console.log ("Checking: " + due + " - " + due.length);
  if (date.length <= 8) {
    ///console.log ("Fixing: " + due)
    pages[i].date = date + "{{site.classtime}}";
  }
}


pages.sort(sortDueDates).reverse();

for (var i = 0; i < pages.length ; i++) {
  
  makeRow(pages[i]);  
}

</script>
