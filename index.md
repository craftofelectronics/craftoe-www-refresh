---
title: At a Glance
layout: default
---

<table id="activities" class="table table-striped table-hover">
  <tbody>

  <tr>
    <td width="20%" style="padding: 8px;"><h3>Due</h2></td>
    <td width="80%" style="padding: 8px;"><h3>To Do</h2></td>
  </tr>
</tbody>
</table>

<script>
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
