---
---


var dayName = function (d) {
  var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
  return days[d];
  
};

var member = function (ls, v) {
  var result = false;
  
  for (var i = 0; i < ls.length; i++) {
    if (v == ls[i]) {
      result = true;
    }
  }
  return result;
}


var awesome = function (ico) {
  return '<i class="fa fa-' + ico + '"></i>'
}

var icons = { "reading"     : awesome("book"), 
              "pdf"         : "<img src='{{site.base}}/images/pdf.png'/>",
              "doc"         : "<img src='{{site.base}}/images/doc.png'/>",
              "code"        : awesome("linux"),
              "planning"    : awesome("cogs"),
              "warning"     : awesome("warning-sign"),
              "www"         : awesome("globe"),
              "calendar"    : awesome("calendar"),
              "video"       : awesome("facetime-video"),
              "think"       : awesome("cogs"),
              "idea"        : awesome("lightbulb"),
              "arrow-up"    : awesome("circle-arrow-up"),
              "group"       : awesome("group"),
              "reading"        : awesome("book"),
              "local"       : "<img src='{{site.base}}/images/bclogo24.png'/>",
              "berea24"       : "<img src='{{site.base}}/images/bclogo24.png'/>",
              "berea16"     : "<img src='{{site.base}}/images/bclogo16.png'/>",
              "default"     : "",
              "proto"       : awesome("wrench"),
              "prototyping" : awesome("wrench"),              
              "making"      : awesome("wrench"),
            }
            
var getIcon = function (allcats) {
  cats  = allcats.split(",");
  // For default parameters
  // size = typeof size !== 'undefined' ? size : '16';
  
  result = "";
    
  for (var cat in cats) {
    sw = cats[cat].trim();
    if (result == "") {
      if (icons[sw] != undefined) {
          result += icons[sw];
      }
    } else {  
      result += " , " + icons[sw];
    }
  }
  return result;
}

var isReleased = function (after) { 
  /* Here's a way to cheat when testing on localhost. 
  I can pretend it is some date in the future for purposes of 
  testing my release dates. */
  if (window.location.hash.indexOf("#date") != -1) {
    var re = /date(\d+)/;
    
    var result = re.exec(window.location.hash);
    
    if (moment(after, "YYYYMMDD").unix() < moment(result[1], "YYYYMMDD").unix()) {
      return true;
    }
  }
  
  switch (after) {
  case "":
    return false;
  case "now":
    return true;
  default:
    return moment(after, "YYYYMMDD").unix() < moment().unix(); 
  }
};

var onlyInFuture = function (due, txt) {
  var m;
  var returnText = "";
  m = parseDueDate(due);
  
  if (m.diff(moment(), 'days') >= 0) {
    returnText = txt;
  }
    
  return returnText;
}

// 5 or less days, RED
// 8 or less days, YELLOW
// 9 or more days, GREEN
// Past? Light grey
var getRangeColor = function (mom) {
  var difference = mom.diff(moment(), 'days');
  if (difference >= 0) {
    if (difference <= 5) {
      return "label-danger";
    } else if (difference <= 8) {
      return "label-warning";
    } else if (difference >= 9) {
      return "label-success";
    }
  } else {
    return "label-default";
  }
}

var isValidDueDate = function (due) {
  return (due.length == 12 || due.length == 8);
}

var parseDueDate = function (due) {
  var m;
  if (due.length == 12) {
    m = moment(due, "YYYYMMDDHHmm");
  } else if (due.length == 8) {
    m = moment(due, "YYYYMMDD");
  }
  
  return m;
}
