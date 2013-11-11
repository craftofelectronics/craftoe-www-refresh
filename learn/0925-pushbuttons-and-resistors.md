---
title: Pushbuttons and Resistors
activity: "reading"
due: "20131009"
release: "now"
layout: default
---


As we move forward, we're going to need to develop some understanding of components. We've been playing with equations (some), but now we're going to start putting some practical experience together with that mathematics.

## All About Components

I've provided you with a reading about [Jumpers, Pushbuttons, and Resistors](http://moodle2.berea.edu/mod/resource/view.php?id=95360) in Moodle. Give it a read, and answer the following questions:

1. Resistors are coded using colors. For example, a 1000{{site.ohm}} resistor is coded as BROWN-BLACK-RED. Figure out the color coding for the following resistors: 110{{site.ohm}}, 470{{site.ohm}}, 560{{site.ohm}}, 2.2K{{site.ohm}}, 10K{{site.ohm}}, and 1M{{site.ohm}}.

1. A 1K{{site.ohm}} resistor can have a final band that is either silver or gold. What does that band mean? If you had 5000 of these resistors, and you tested all of them, what range of values could you expect to find if they all had a silver band at the end? What if they all had a gold band at the end?

1. On page 86, there's some discussion of resistors in series and resistors in parallel. In particular, there's a voltage divider circuit. If you're given a 10K resistor (call it **R1**), and a 5V power supply, what resistor would you need to put in series with it to divide that voltage and get out 3.3V? What about 1.8V? (In Figure 10-20, we're talking about the measurement point labeled **A**.) You might watch (or re-watch) [this video to get you started](http://www.youtube.com/watch?v=1cQy7dEVoLM).

1. **CHALLENGE!** Figure 5.11 has a rather complex looking diagram of a keypad with 16 keys on it. The text above the diagram describes how a keypad works. In your own words (and diagrams), explain how, step-by-step, something like our Arduino might read the keypad. Assume that you can use four pins of your Arduino (numbered 2, 3, 4, and 5) to create a pulse on the first four wires, and you can use another four pins (6, 7, 8, and 9) to read the remaining four wires coming out of the keypad.

### About These Questions

You'll want to dive into these, and spend some time wrestling with them. That said, we're going to spend some time practicing questions just like these in class. You will get far less from our work in-class if you don't spend the time wrestling with these in advance. So, do your best, submit your work to Moodle, and come prepared to ask questions and continue exploring things along these lines.

We'll follow our theoretical work with some practical exercises with our Arduino kits.

{% include submit assign="Pushbuttons and Resistors" naming="push-and-resist" %}
