# smooth-hash-jump (jQuery Plugin)
Jumping to target element smoothly.

## Why smooth-hash-jump?
If you have lots of internal hash links in page, let's say documentation page, you may want to make the hash jump more friendly, e.g. adding transitions, smooth-hash-jump just do it, it adds a transition with smooth scrolling.

## Features
1. Supports various form of links(e.g. "#target-id", "/path/to/page.html#target-id" or "http://example.com/path/to/page.html#target")
2. Doesn't handle broken-hash links(e.g. "#non-exist-id") and empty-hash links(e.g. "#")
3. Use native smooth scroll feature if available

## Limitaions
1. Listen only on link click, not on javascript-triggered hash change
2. Actual hash change will be delayed for 400ms

## Supported Browsers
+ Chrome latest 3
+ Firefox latest 3
+ Safari 10.1+
+ Microsoft Edge 12+
+ Internet Explorer 11

## Usage
1. Add internal hash links to your page
2. Load jquery.js
3. Load smooth-hash-jump.js

See [example.xhtml](example.xhtml) for more details
