---
title: Prepping Ohm's
activity: "read"
due: "201309091000"
release: "now"
layout: default
---


## Series & Parallel Circuits & Ohm's Law Physics, part 1

Eeris Fritz does an excellent job of explaining some of the mathematical relationships that exist in Ohm's Law, a fundamental relationship in the study of electricity.
 
<iframe width="853" height="480" src="//www.youtube.com/embed/sI8qFPGYXsQ" frameborder="0" allowfullscreen></iframe>

## Series & Parallel Circuits & Ohm's Law Physics, part 2

<iframe width="853" height="480" src="//www.youtube.com/embed/ElXIdcVVl3g" frameborder="0" allowfullscreen></iframe>

## Begin Your Explorations

Next, we're going to go through and do a practical exploration of voltage and current in a simulated environment. This will take time, you will have questions, and you should plan on coming in for some help Sunday evening.

In this, you'll be using [CircuitLab](http://circuitlab.com/). Create an account; it's free, and does not generate SPAM.

**STEP ONE**: You're about to explore a series of circuits virtually, taking measurements as you go.

**STEP TWO**: Then, we'll put some math behind the exploration.

You are welcome to work with a partner in this activity; if you do so, you must clearly state that you did at the top of your respective submissions. However, you both must submit work separately, and you will be examined on this work separately in the future. Therefore, in working with a colleague, you need to be **responsible for your own learning**.

## Step One: Virtual Circuits

You and your partner (if you work with one) should take turns constructing circuits; this way, one of you is "navigating" and asking questions while the other is driving and trying to make things line up. Or, you might both work through everything on your own laptops at the same time. 

Letting one person build all the circuits and the other take notes is a recipe for one person knowing things and the other being confused.

### Just A Battery

The circuit lab editor has components on the left and a big area to build things on the right. 


![Editor]({{site.base}}/images/circuitlab/01-editor.png)

The first thing we need to do is drag out a voltage source. This could be a "wall wart," a power supply, or a battery. In our diagrams, it will simply be a voltage source.


![Voltage Source]({{site.base}}/images/circuitlab/02-voltage-source.png)

For our first experiment, lets make this a 9V battery. Double-click the component, and change the value from 1V (the default) to 9V.

While you're at it, give the component a descriptive name; "Battery" could be good.

### Add a Resistor

Next, drag out a resistor. Let's make that a 1000{{site.ohm}} (or 1K{{site.ohm}}) resistor. 


![Resistor]({{site.base}}/images/circuitlab/03-resistor.png)

### Make a Circuit

We go from the +, through the resistor, to the -.


![Circuit]({{site.base}}/images/circuitlab/04-circuit.png)

### Make Ready to Measure

Finally, we need to add two more components: a ground, and measurement nodes.

(Why we add the ground, to some extent, confuses me. It is, I think, an oddity of this particular application. Or, a lack of understanding of CircuitLab on my part. So, do as I do: add a ground to the negative side of your circuit, preferably close to the voltage source so you don't lose track of it.)


![Ground and Nodes]({{site.base}}/images/circuitlab/05-ground-nodes.png)

We'll also add two **measurement nodes**. These are points where we will be able to ask CircuitLab to calculate the voltage for us. In this case, we want to know what the voltage is on the "high" side of the resistor, and what it is on the "low" side of the resistor.

At this point, my completed circuit looks like this:


[![CircuitLab Schematic sjznwe](https://www.circuitlab.com/circuit/sjznwe/screenshot/540x405/)](https://www.circuitlab.com/circuit/sjznwe/craftoe-example-1/)


Clicking on the above image will take you directly to CircutLab, where you could interact with it further. (The nice thing about CircuitLab is that it provides a powerful, web-based tool for sharing and working with circuits.)

## Run the Simulator

Once you have:

1. A voltage source
1. A resistance
1. A ground reference
1. One or more measurement nodes

you're ready to run the simulator. Click the "Simulate" button at the bottom of the CircutLab screen.

Next, press **Run DC Solver**. Nothing exciting will happen.

Next, hover your mouse around the circuit; if you hover over one of the NODE blocks, you will see that your cursor changes into a probe. Click on NODE1 and on NODE2. You will see two voltage equations appear on the left. NODE1 should read 9V, and NODE2 should read 0V.

## Questions

Answer the following questions with your partner as you go. You'll need to discuss them, and then record your answers in a Word document. This will be submitted to Moodle at the end of class.

1. Does it make sense that NODE1 reads 9V? Why?
1. Does it make sense that NODE2 reads 0V? Isn't there voltage in the circuit?

First, consider the following situation:

A bucket of water is placed on a shelf 9 feet up. A second bucket is placed on the floor (which will we call 0 feet). A hose is run from the top bucket to the bottom bucket, and when we open the spigot, water flows from the top to the bottom. 

Assume that the pressure that the water comes out at is 1 unit of pressure per foot that we raised the bucket. So, in this case, we have 9 units of pressure at the bottom when the water comes out.

1. If we raise the bucket to 18 feet, what happens to the pressure?
1. If we lower the bucket to 3 feet, what happens to the pressure?
1. If we put both buckets on the floor, does the water necessarily flow from one bucket to the other? (Work with the analogy.)

Now, imagine that you squeeze the hose in the middle.

1. How many units of *potential* pressure will the water have at the moment it exits the bucket at a height of 9 feet?
1. How many units of *potential* pressure will the water have at the moment it enters the bucket on the floor?
1. If we squeeze the hose lightly, will this change the units of pressure at the top or at the bottom? (The answer is "no." But why?)
1. If we squeeze the hose shut in the middle, will there be any water at the bottom? Will the water, in a word, flow from the top to the bottom?
1. Finally, with your partner, discuss how the idea of water pressure and water flow might relate to voltage, current, and resistance. **DO NOT** click the link below until you have committed to an answer.

{% showhide analogy analogy explanation %}

Voltage is the water "pressure" at the top and bottom; the current is the rate at which the water flows through the tube. The questions above have nothing to do with how fast the water flows through the tube, only how much pressure there is at the top and the bottom.

This is what NODE1 and NODE2 measure: the voltage (or potential energy, or electrical "pressure") above the resistor and below the resistor. Once we get past the resistor, and to the negative side of the battery, we have no electromotive force left to do any work.

In that circuit, anyway.

{% endshowhide %}

## Two Resistors

Now, we will explore a circuit with two resistors. 


![Two Resistors](https://www.circuitlab.com/circuit/qd39an/screenshot/540x405/)

Build this circuit in CircuitLab.

1. What happens to the voltage in this circuit?
1. Do NODE1 and NODE3 conform to our existing theory of how voltage works?
1. What is happening at NODE2?

This last  question is particularly important. We can make this work with our analogy of buckets of water on shelves, for what it is worth. 

{% showhide morebuckets hint %}
Imagine more buckets.
{% endshowhide %}

## Modifying Values

Using the same circuit, lets explore changing the values of the resistors.

1. If we change the value of R1, will affect the value of NODE1? What about NODE2? Will NODE3 change?
1. Change the value of R1 to 8000{{site.ohm}}, or 8K{{site.ohm}}. What value do you get at each location?
1. Change the value of R1 to 7K{{site.ohm}}, and R2 to 2K{{site.ohm}}. 
1. Again, change the values to 6K{{site.ohm}} and 3K{{site.ohm}}.

Do you see a pattern? Get out a piece of paper. Draw a set of axes. The y-axis is vertical, the x-axis is horizontal. Give each a range of 10.


![Cartesian Plane]({{site.base}}/images/cartesian-plane.png)

(This example cartesian plane goes from -10 to 10; yours really only needs to go from 0 to 10 in each dimension.)

Plot all of the values of the middle node as you change R1 and R2 from (9K{{site.ohm}}, 1K{{site.ohm}}) to (1K{{site.ohm}}, 9K{{site.ohm}}). (You'll have 8 points, I think.)

## Repeat the Experiment

Draw a new circuit.


![Two Resistors, Bigger](https://www.circuitlab.com/circuit/pga7wz/screenshot/540x405/)

1. Draw a new graph. Make it go from 0 to 20, in steps of 2.
1. Change the battery voltage to 20V.
1. Change R1 to 18K{{site.ohm}}, and R2 to 2K{{site.ohm}}. Plot all values until you get to (2K{{site.ohm}}, 18K{{site.ohm}}), and go in steps of 2. (You'll have around 10 points again.)

## Compare

1. What is similar between these two graphs?
1. At what point is the voltage at NODE2 exactly half of the battery voltage?

## Current

Now, let's investigate current.

Set your circuit back to 9V, 8K{{site.ohm}} (for R1), and 1K{{site.ohm}} (for R2).

Click **Simulate**. Run the **DC Solver**. So far, nothing is new. But, now, hover your probe pointer over the wires, searching for little grey circles. Down in the lower right-hand corner of the window, you'll see the output of the probe.


![Probe Current]({{site.base}}/images/circuitlab/06-probe-current.png)

(In the image above, you can see the probe in the circuit, and the values in the bottom right of the screen.)

Now, here's the fun part: the probe tells you what the current is. 

1. When you have (R1, R2) with values of (8K{{site.ohm}}, 1K{{site.ohm}}), what is the current in the circuit?
1. What is the current at the top of the circuit?
1. What is the current at the bottom of the circuit?
1. What is the current in the middle of the circuit?

(Note that the simulator gets confused, and sometimes shows a negative current. Just read everything as positive.)

Hm. That's kinda interesting.

Now, change the values to (7K{{site.ohm}}, 2K{{site.ohm}}). 

1. What is the current at the top of the circuit?
1. What is the current at the bottom of the circuit?
1. What is the current in the middle of the circuit?

Hm. Also interesting.

## Plotting Current

Lets do another experiment.

Draw another set of axes. On the y-axis, go from 0V to 10V. On the x-axis, go from 0.0mA to 1.0mA in steps of 0.1. (That means they'll be 0.0, 0.1, 0.2, 0.3, etc. up to 0.9, 1.0.)

1. Set the battery to 0V.
1. Set R1 to 9K{{site.ohm}}, and R2 to 1K{{site.ohm}}.
1. Plot the value of V and I.
1. Change the voltage on the battery to 1V. Plot the current for (V, I).
1. Repeat for the values of 0V through 10V in 1V increments.

Now, some questions:

1. How is resistance changing as you change the voltage?
1. What happens to the current as you change the voltage?
1. If you were to change the values of R1 and R2, would the current reading change?
1. Imagine we changed R1 and R2 to (say) 100{{site.ohm}} and 200{{site.ohm}} (much smaller values). Now, you leave the resistors at those values, and then make another plot from 0V to 10V. Do you think you would get a similar result? What would be the primary difference?
1. Conduct the experiment in the previous question to see if your hypothesis is correct.

## Ohm's Law

At this point, you should have enough data to answer some questions about Ohm's Law.

1. If voltage goes up, and resistance stays constant, what happens to the current?

1. If voltage goes down, and resistance stays constant, what happens to the current?

1. If voltage stays constant, and resistance goes up, what happens to the current?

1. If voltage stays constant, and resistance goes down, what happens to the current?

1. If the voltage is zero, what happens to the current? Does it matter what the resistance is in this circumstance?

1. If we have a 9V battery, and we have a resistance of zero, what must the value of the current be? Big, or small? How big?

1. *The same question, aksed another way*: what happens to the current as the resistance approaches zero?

## The Mathematics of Ohm's Law

You may have figured out Ohm's Law by now, or perhaps not.

{% showhide ohms-law-sh equation %}

<div align="center">V = IR</div>

{% endshowhide%}

Lastly, we'll close with a few safety questions.

Grabbing two wire ends, one in each hand, puts you in the circuit. Current will flow directly through you, and (most likely) affect the heart along the way.

1. The human body, dry, has a resistance of around 15K{{site.ohm}}. Lets say you're using your Arduino, which runs at 5V. What kind of current would you be dealing with across your body? <br/> &nbsp; <br/> You can, of course, build a circuit that has a 5V power source, a single 15K{{site.ohm}} resistor, and find out what the current is in the circuit. Or, you can use Ohm's law.

1. Now, you're working with a 12V car battery, in the rain. Your body has a resistance closer to 3K{{site.ohm}}. What kind of tickle can we get across the body now?

1. The electrical outlet in your home provides 120V, and the circuit breaker trips at 10A (typically; we have some 20A circuits in our lab). You just came in from the rain, so your body has around 5K{{site.ohm}} resistance. What kind of current might make its way through your body if you (ill-advisedly) play games with the electrical outlets?

I've read a number of sources (and you'll read some as well), and it isn't clear *exactly* what conditions are correct for you to get hurt when dealing with electricity. What I've found is that, like most things involving highly variable, very squishy things (eg. people), the numbers involved are not precise. However, on [this electronics.stackexchange.com page](http://electronics.stackexchange.com/questions/19103/how-much-voltage-is-dangerous), I found this useful chart:


![Danger Chart]({{site.base}}/images/circuitlab/OT5MB.png)

Using this chart, determine which conditions above are likely to be dangerous. 

{% comment %}
## Practice Makes Perfect

Finally, if you have time, I recommend you and your partner practice a series of questions from *All About Circuits*, a great online textbook regarding electricity and electronics that we will use more than once this term.

[http://www.allaboutcircuits.com/worksheets/ohm_law.html](http://www.allaboutcircuits.com/worksheets/ohm_law.html)

Questions 1, 2, 3, 5, 6, and 10 are all reasonable to wrestle with at this time.
{% endcomment %}

## Checkout

Before you leave for the day, check in with {{site.prof-first}}. 

## Submission

See the [Ohm's Law, Experimentally]({{site.base}}/todo/a6/) assignment for submission guidelines.

