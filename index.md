---
title: At a Glance
layout: default
---

<table id='activities' class='table table-striped table-hover'>
  <tbody>

  <tr>
    <td width='20%' style='padding: 8px;'><h3>Due</h2></td>
    <td width='80%' style='padding: 8px;'><h3>To Do</h2></td>
  </tr>
</tbody>
</table>


{% comment %}
  This block generates the list of pages that we want to render.
  It eliminates all pages that don't have a title.
  It only looks for pages in the categories "learn" or "interact"
  It pads the date with the classtime (if available) or midnight (otherwise)
  Everything becomes part of a list of hashes... or anonymous objects...
  whatever they are in Javascript.
{% endcomment %}

{% for page in site.pages  %}
  {% if page.title != '' %}
    {% for cat in site.inclass %}
      {% if (page.categories contains cat) %}
        {% capture date_length %}{{ page.date | size | minus: 9 }}{% endcapture %}
        {% capture date %}{{page.date}}{% endcapture %}
        {% if date_length contains '-' %}
          {% if site.classtime %}
            {% capture date %}{{page.date}}{{site.classtime}}{% endcapture %}
          {% else %}
            {% capture date %}{{page.date}}0000{% endcapture %}
          {% endif %}
        {% endif %}
        {% capture inclassEntries %}{{inclassEntries}}
        {url: '{{site.base}}{{page.url}}', 
        title: '{{page.title}}', 
        categories: '{{page.categories}}', 
        date: '{{date}}', 
        release: '{{page.release}}',
        nolink: '{{page.nolink}}'},
        {% endcapture %}
      {% endif %}    
    {% endfor %}
  {% endif %}
{% endfor %}


{% for page in site.pages  %}
  {% if page.title != '' %}
    {% for cat in site.todo %}
      {% if (page.categories contains cat) %}
        {% capture date_length %}{{ page.date | size | minus: 9 }}{% endcapture %}
        {% capture date %}{{page.date}}{% endcapture %}
        {% if date_length contains '-' %}
          {% if site.classtime %}
            {% capture date %}{{page.date}}{{site.classtime}}{% endcapture %}
          {% else %}
            {% capture date %}{{page.date}}0000{% endcapture %}
          {% endif %}
        {% endif %}
        {% capture todoEntries %}{{todoEntries}}
        {url: '{{site.base}}{{page.url}}', 
        title: '{{page.title}}', 
        categories: '{{page.categories}}', 
        date: '{{date}}', 
        release: '{{page.release}}',
        nolink: '{{page.nolink}}'},
        {% endcapture %}
      {% endif %}    
    {% endfor %}
  {% endif %}
{% endfor %}

<script>
var todo = [   
  {{todoEntries}}
];

var inclass = [   
  {{inclassEntries}}
];

var sortDueDates = function (a, b) {  
  if (a.date > b.date) { return 1; } else { return -1; }
};

pages = todo.concat(inclass);
pages.sort(sortDueDates).reverse();

for (var i = 0; i < pages.length ; i++) {  
  makeRow(pages[i], "activities");  
}



</script>
