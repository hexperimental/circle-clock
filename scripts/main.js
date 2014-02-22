$(document).ready(function() {
      var w=680;
      var h=800;
      $("body").css("background","#000");
      var r = Raphael("canvas", w, h),
      ox=w/2,
      oy=h/2,
      R =320,
      grid = [],
      init = true;
      var hr = r.circle(ox,oy, R).attr({
         stroke: "#00ff00",
         fill: "none",
         opacity:.7,
         "stroke-width":8
      });
      var min = r.circle(ox,oy, R).attr({
         stroke: "#00ff00",
         fill: "none",
         opacity:.7,
         "stroke-width":3
      });
      var sec = r.circle(ox,oy, R).attr({
         stroke: "#00ff00",
         fill: "none",
         opacity:.7,
         "stroke-width":3
      });
      var ms = r.circle(ox,oy, R).attr({
         stroke: "#00ff00",
         fill: "#00ff00",
         opacity:.1,
         "stroke-width":5
      });

      (function () {
          var d = new Date;
          var am = (d.getHours() < 12);
          var h = d.getHours() % 12 || 12;

          setTimeout(arguments.callee, 10);
          if(!init){
             updateVal(d.getSeconds(), 60, 200.001, sec, 2);
             updateVal(d.getMinutes(), 60, 160.001, min, 1);
             updateVal(d.getMilliseconds(), 1000, 160.001, ms, 1);
             updateVal(h, 12, 120.001, hr, 0);
             if(grid.length==0){
             setupGrid(grid);
             }
          }
          init = false;
       })();


      function updateVal(value, total, R, hand, id) {
         var frame = value / total;
         if(frame==1){frame=0;}
         hand.attr({cx:ox,cy:oy,scale:frame});
      }

      function setupGrid(grid) {
         for( var i=0 ; i<=12 ;i++){
            var attr = {font: '10px Fontin-Sans, Arial', opacity: 0.5};
            r.text( ox + (R*(i/12)) , oy, i).attr(attr).attr({fill: "#0f0"});
            grid.push(r.circle(ox,oy, R*(i/12)).attr({stroke: "#fff", fill: "none",opacity:.1,"stroke-width":1}));
         }
      }

});
