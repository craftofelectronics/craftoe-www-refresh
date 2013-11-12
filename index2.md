---
layout: default
title: At a Glance
---
<script src="/js/yui-min.js"></script>

<style>
.goofy {
  background-color: #f00;
}
</style>

<div id="demo" class="yui3-skin-sam yui3-g"> <!-- You need this skin class -->
  <div id="leftcolumn" class="yui3-u">
     <!-- Container for the calendar -->
     <div id="mycalendar"></div>
  </div>
  <div id="rightcolumn" class="yui3-u">
   <div id="links" style="padding-left:20px;">
      <!-- The buttons are created simply by assigning the correct CSS class -->
      <button id="togglePrevMonth" type="button" class="btn btn-primary">Toggle Previous Month's Dates</button><br>
      <button id="toggleNextMonth" type="button" class="btn btn-warning">Toggle Next Month's Dates</button><br>
      Selected date: <span id="selecteddate"></span>
   </div>
  </div>
</div>

<script type="text/javascript">
YUI().use('calendar', 'datatype-date', 'cssbutton',  function(Y) {
    
    // Create a new instance of calendar, placing it in 
    // #mycalendar container, setting its width to 340px,
    // the flags for showing previous and next month's 
    // dates in available empty cells to true, and setting 
    // the date to today's date.          
    var calendar = new Y.Calendar({
      contentBox: "#mycalendar",
      width:'340px',
      showPrevMonth: true,
      showNextMonth: true,
      date: new Date()
    });
    
    // Get a reference to Y.DataType.Date
    var dtdate = Y.DataType.Date;

    // Listen to calendar's selectionChange event.
    calendar.on("selectionChange", function (ev) {

      // Get the date from the list of selected
      // dates returned with the event (since only
      // single selection is enabled by default,
      // we expect there to be only one date)
      var newDate = ev.newSelection[0];

      // Format the date and output it to a DOM
      // element.
      Y.one("#selecteddate").setHTML(dtdate.format(newDate));
      console.log("HOLLER");
    });



    var rules = {
      "2013": {
        "10": {
          "all": {
            "0,6": "winterweekends"
          }
        }
      }
    };

    var filterFunction = function (date, node, rules) {
      console.log(date);
      if (rules.indexOf("winterweekends" >= 0)) {
        console.log(node);
        //calendar.selectDates(date);
        node.setStyle('backgroundColor', '#f00');
      }
    }

    

    // When the 'Show Previous Month' link is clicked,
    // modify the showPrevMonth property to show or hide
    // previous month's dates
    Y.one("#togglePrevMonth").on('click', function (ev) {
      ev.preventDefault();
      calendar.set('showPrevMonth', !(calendar.get("showPrevMonth")));    
    });

    // When the 'Show Next Month' link is clicked,
    // modify the showNextMonth property to show or hide
    // next month's dates
    Y.one("#toggleNextMonth").on('click', function (ev) {
      ev.preventDefault();
      calendar.set('showNextMonth', !(calendar.get("showNextMonth")));      
    });
    
    calendar.set("customRenderer", {rules: rules, filterFunction: filterFunction});
    
    calendar.selectDates(new Date());

    calendar.render();
});



</script>






















<div class="row">
  <div class="col-md-6">
<table id="learn" class="table table-striped table-hover">
  <tbody>
</tbody>
</table>
</div>
  <div class="col-md-6">
<table id="interact" class="table table-striped table-hover">
  <tbody>
</tbody>
</table>
</div>
</div>


<script>
var todayInserted = false;
var prevDate = "";

var shownDates = [];

var makeRow = function (page, tablename) {
  // Because I changed from five params to an object late.
  var url = page.url;
  var title = page.title;
  var category = page.category;
  var due = page.due;
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
  pie += "<td width='30%'>[[&due]]</td>";
  pie += "<td>[[&icon]] &nbsp; [[&activity]]</td>";
  pie += "</tr>";

  // If it is an assignment or a class with a date
  
  
  if (isValidDueDate(due)
      && isReleased(after))  {
    m = parseDueDate(due);
    
    var diff = m.diff(moment(), 'days');
    var difference = "";
    if (diff >= 0) {
      difference = m.from(moment());
    }
  
  // TODO
  if (url.indexOf("learn") != -1
      && isReleased(after)) {
      
      difference = "<span class='label " + 
          getRangeColor(m) + 
          " pull-right'>" +
          difference + 
          "</span>";
    }
  
  // CLASS = Don't bother
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
  
  
  var filling = { due: dateString + onlyInFuture(due, difference),
                  activity: activity, 
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
        awesome("hand-left") +
        "</td></tr>";
      $("#activities > tbody:last").append(here);      
      todayInserted = true;
    }
    
    // Insert the row first
    var row = Mustache.to_html(pie, filling);
    $("#" + tablename + " > tbody:last").append(row);
    
  }

};

/* Generate an array of page objects */
var learn = [   
{% for page in site.pages  %}
  {% if page.title != "" %}
  
    {% if page.url contains "/learn"  %}
      {url: "{{site.base}}{{page.url}}", 
      title: "{{page.title}}", 
      category: "{{page.activity}}", 
      due: "{{page.due}}", 
      release: "{{page.release}}",
      nolink: "{{page.nolink}}"},
    {% endif %}    
  {% endif %}
{% endfor %}
];

var interact = [   
{% for page in site.pages  %}
  {% if page.title != "" %}
{% if page.url contains "/interact" %}
  {url: "{{site.base}}{{page.url}}", 
  title: "{{page.title}}", 
  category: "{{page.activity}}", 
  due: "{{page.date}}", 
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
  if (a.due.length < 8) {a.due = a.due + "0000";}
  if (b.due.length < 8) {b.due = b.due + "0000";}  
  if (a.due > b.due) { return 1; } else { return -1; }
};


var addCourseTimeAndSort = function (pages) {
// Add the course time to everything
  for (var i = 0 ; i < pages.length ; i++ ) {
    due = pages[i].due;
    //console.log ("Checking: " + due + " - " + due.length);
    if (due.length <= 8) {
      ///console.log ("Fixing: " + due)
      pages[i].due = due + "{{site.classtime}}";
    }
  }
  pages.sort(sortDueDates).reverse();
};


var makeTable = function (pages, tablename) {
  addCourseTimeAndSort(pages);
  for (var i = 0; i < pages.length ; i++) {
    makeRow(pages[i], tablename);  
  }
};

makeTable(learn, "learn");
makeTable(interact, "interact");
</script>
