<template>
  <div>
    <ul class="timeline-events">
      <li class="timeline-event-years-6-5 timeline-event-legend">
        <span>
          <i></i>
          <h2>Graduation</h2>
          <h3>University of California, San Diego</h3>
          <h4>BA Visual Arts</h4>
        </span>
        <i></i>
      </li>
      <li class="timeline-event-years-2">
        <h2>2004-2006</h2>
        <h3>Ideaworks Advertising</h3>
        <h4>Interactive Designer</h4>
      </li>
      <li class="timeline-event-years-2">
        <h2>2006-2008</h2>
        <h3>Pint, Inc</h3>
        <h4>Associate Creative Director</h4>
      </li>
      <li class="timeline-event-years-3">
        <h2>2008-2011</h2>
        <h3>Cuker Interactive</h3>
        <h4>Creative</h4>
      </li>
      <li class="timeline-event-years-7">
        <h2>2011-Present</h2>
        <h3>Independent</h3>
        <h4>Interactive Art Director</h4>
      </li>
    </ul>
    <ul class="timelines-years">
      <li>2000</li>
      <li>2002</li>
      <li>2004</li>
      <li>2006</li>
      <li>2008</li>
      <li>2010</li>
      <li>2012</li>
      <li>2014</li>
      <li>2016</li>
      <li>2018</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
// ----------------------------------------------
$grid-background-color: #0f0f0f;
$grid-line-color: #000;
$grid-width: 100px;
$timeline-events-no: 5;
$timeline-events-line-height: 8px;
$timeline-years-no: 8;

/* Timeline - Years */
.timelines-years {
  position: absolute;
  top: 300px;
  padding: 0 0 0 #{$grid-width * 2};
  margin: 0;
  white-space: nowrap;
  border-top: 1px solid #282828;
  list-style: none;
  /* Fix display: inline-block spacing issue */
  font-size: 0;
}
.timelines-years li {
  position: relative;
  top: -6px;
  display: inline-block;
  width: #{$grid-width * 2};
  color: #868686;
  font-size: 11px;
  line-height: 11px;
  text-indent: -12px;
}
/* Display last year */
.timelines-years li:last-child {
  width: $grid-width;
}

/* Timeline - Events */
.timeline-events {
  position: absolute;
  top: 170px;
  padding: 0;
  list-style: none;
  white-space: nowrap;
  /* Fix display: inline-block spacing issue */
  font-size: 0;
}
.timeline-events h2,
.timeline-events h3,
.timeline-events h4 {
  margin: 0 0 1px 0;
  font-weight: normal;
  font-size: 11px;
}
.timeline-events h2 {
  color: #777;
  text-transform: uppercase;
}
.timeline-events h4 {
  color: #fff;
  font-style: italic;
}
.timeline-events li {
  position: relative;
  display: inline-block;
}
.timeline-events li:before {
  position: absolute;
  left: 0;
  bottom: -36px;
  height: $timeline-events-line-height;
  border-radius: $timeline-events-line-height;
  content: "";
}
@for $i from 1 through $timeline-events-no {
  .timeline-events li:nth-child(#{$i}) {
    bottom: #{((($timeline-events-line-height * 2) * $i)) -
      ($timeline-events-line-height * 2)};
  }
}

/* Timeline - Events - Colours */
/* Grey/Green */
.timeline-events li:nth-child(1):before {
  background: #c2e34e;
  background-image: linear-gradient(
    left,
    $grid-background-color 0,
    #c2e34e 100%
  );
  border-radius: 0 6px 6px 0;
}
.timeline-events li:nth-child(1) h3 {
  color: #c2e34e;
}
/* Orange */
.timeline-events li:nth-child(2):before {
  background: #ff9704;
}
.timeline-events li:nth-child(2) h3 {
  color: #ff9704;
}
/* Blue */
.timeline-events li:nth-child(3):before {
  background: #56c2f3;
}
.timeline-events li:nth-child(3) h3 {
  color: #56c2f3;
}
/* Red */
.timeline-events li:nth-child(4):before {
  background: #dd3d01;
}
.timeline-events li:nth-child(4) h3 {
  color: #dd3d01;
}
/* Aqua/Grey */
.timeline-events li:nth-child(5):before {
  background: #4a8b8f;
  background-image: linear-gradient(
    left,
    #4a8b8f 0,
    $grid-background-color 100%
  );
  border-radius: 6px 0 0 6px;
}
.timeline-events li:nth-child(5) h3 {
  color: #4a8b8f;
}

/* Timeline - Events - Grid */
@for $i from 0 through $timeline-years-no {
  /* X years */
  .timeline-event-years-#{$i},
  .timeline-event-years-#{$i}:before {
    width: #{$grid-width * $i};
  }
  /* X.5 years */
  .timeline-event-years-#{$i}-5,
  .timeline-event-years-#{$i}-5:before {
    width: #{($grid-width * $i) + ($grid-width / 2)};
  }
}

/* Timeline - Legend */
.timeline-event-legend {
  position: relative;
}
.timeline-event-legend span {
  position: absolute;
  bottom: -150px;
  left: 850px;
}
.timeline-event-legend h2,
.timeline-event-legend h3,
.timeline-event-legend h4 {
  display: inline;
  margin-right: 10px;
}
.timeline-event-legend i {
  position: absolute;
  width: 0;
  height: 0;
  border: #{$timeline-events-line-height / 2} solid transparent;
  border-bottom-color: #fff;
}
.timeline-event-legend i:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: #{$timeline-events-line-height / 2} solid transparent;
  border-top-color: #fff;
}
.timeline-event-legend > i {
  bottom: -32px;
  right: -12px;
}
.timeline-event-legend > i:after {
  left: -#{$timeline-events-line-height / 2};
  bottom: -12px;
}
.timeline-event-legend span > i {
  top: -1px;
  left: -14px;
}
.timeline-event-legend span > i:after {
  left: -4px;
  bottom: -12px;
}
</style>
