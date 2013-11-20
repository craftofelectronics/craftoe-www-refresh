---
title: Checking Continuity (Full)
short: One Page
tutorial: "continuity"
index: 20
layout: default
---

{% assign limit = page.index | minus: 1 %}

<div class="">
<h2>Outline</h2>
<ol>
{% for index in (1..limit) %}
  {% for p in site.pages %}
    {% if (p.url contains page.tutorial) and (p.index == index) %}  
<li {% if p.noprint %}class="noprint"{% endif %}><a href="#{{p.title}}">{{p.title}}</a></li>
    {% endif %}
  {% endfor %}
{% endfor %}
</ol>
</div>

{% for index in (1..limit) %}
  {% for p in site.pages %}
    {% if (p.url contains page.tutorial) and (p.index == index)%}  

{% if p.noprint%}
<div class="noprint">
{% endif %}
    
<h2 id="{{p.title}}">{{p.title}} &nbsp; <a href="#" > {% include fa name="arrow-circle-o-up" size="large" %}</a></h2> 
{% kram p.path %}
<p>&nbsp;</p>
{% unless p.last %}
<div class="page-break"></div>
{% endunless %}

{% if p.noprint%}
</div>
{% endif %}

    {% endif %}
    
  {% endfor %}
{% endfor %}
