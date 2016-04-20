/**
 * Created by esattahaibis on 2016-04-19.
 */
(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes
	lib.webFontTxtFilters = {};

// library properties:
	lib.properties = {
		width: 600,
		height: 70,
		fps: 24,
		color: "#FFFFFF",
		webfonts: {},
		manifest: [
			{src:"contents/img/firefox.png", id:"Firefox"}
		]
	};



	lib.webfontAvailable = function(family) {
		lib.properties.webfonts[family] = true;
		var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
		for(var f = 0; f < txtFilters.length; ++f) {
			txtFilters[f].updateCache();
		}
	};
// symbols:



	(lib.Firefox = function() {
		this.initialize(img.Firefox);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,1024,1024);


	(lib.Symbol1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 1
		this.instance = new lib.Firefox();
		this.instance.setTransform(0,0,0.068,0.068);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,70,70);


// stage content:
	(lib.firstanimation = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer 3
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#454545").s().p("AgYA8QgLgFgHgIQgJgIgDgMQgFgMAAgPQAAgNAFgMQADgMAJgJQAHgJALgEQAMgFAMABQAOgBALAFQAKAEAJAJQAHAJAEAMQAFAMAAANQAAAPgFAMQgEAMgHAIQgJAIgKAFQgLAEgOABQgMgBgMgEgAgPgrQgHAEgEAGQgGAFgBAKQgDAIAAAKQAAALADAJQABAJAGAGQAEAGAHADQAHADAIAAQASAAAKgMQAJgNAAgWQAAgVgJgMQgKgNgSAAQgIAAgHADg");
		this.shape.setTransform(138.9,54.3);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#454545").s().p("AgJBbIAAh9IATAAIAAB9gAgFg7IgEgEIgEgFIgCgGIACgGIAEgFIAEgDIAFgCIAGACIAEADIAEAFIACAGIgCAGIgEAFIgEAEIgGABg");
		this.shape_1.setTransform(128.7,51.5);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#454545").s().p("AgJBbIAAi1IATAAIAAC1g");
		this.shape_2.setTransform(122.3,51.4);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#454545").s().p("AgYA8QgLgFgIgIQgHgIgEgMQgFgMAAgPQAAgNAFgMQAEgMAHgJQAIgJALgEQALgFANABQANgBAMAFQAKAEAIAJQAJAJADAMQAFAMAAANQAAAPgFAMQgDAMgJAIQgIAIgKAFQgMAEgNABQgNgBgLgEgAgPgrQgHAEgFAGQgEAFgDAKQgCAIAAAKQAAALACAJQADAJAEAGQAFAGAHADQAHADAIAAQATAAAIgMQAKgNgBgWQABgVgKgMQgIgNgTAAQgIAAgHADg");
		this.shape_3.setTransform(112.2,54.3);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#454545").s().p("AgTBaIAAhpIgNgCIgFgCQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgJIATAAIAAgNQABgLADgIQADgIAFgHQAHgGAFgCQAIgDALgBQAIAAAHADIAAAMQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgFABIgEAAQgGAAgFABQgEACgEAEQgDADgCAFQgBAGAAAIIAAAMIAkAAIAAAPIgkAAIAABqg");
		this.shape_4.setTransform(101.1,51.5);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#454545").s().p("AglBAIAAh8IANAAQADgBACACQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIABAVQAHgOAJgIQAIgHANAAIAJACIAIACIgDARQgBAEgDgBIgFgBIgKgBQgMAAgGAHQgHAHgGANIAABOg");
		this.shape_5.setTransform(92.4,54.2);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#454545").s().p("AgXA8QgMgFgHgIQgIgIgFgMQgEgMAAgPQAAgNAEgMQAFgMAIgJQAHgJAMgEQALgFAMABQAOgBAKAFQALAEAJAJQAIAJAEAMQAEAMAAANQAAAPgEAMQgEAMgIAIQgJAIgLAFQgKAEgOABQgMgBgLgEgAgPgrQgHAEgEAGQgGAFgBAKQgDAIAAAKQAAALADAJQABAJAGAGQAEAGAHADQAHADAIAAQASAAAKgMQAIgNABgWQgBgVgIgMQgKgNgSAAQgIAAgHADg");
		this.shape_6.setTransform(79.8,54.3);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#454545").s().p("Ag6BZIAAixIA0AAQAPAAANAEQANAEAIAHQAIAIAEAKQAEAKAAAMQAAANgEALQgFAJgIAGQgIAIgNAEQgMAEgPAAIgcAAIAABDgAgiACIAcAAQAJABAIgDQAIgBAFgFQAFgFADgGQADgHAAgJQAAgQgLgLQgKgJgUAAIgcAAg");
		this.shape_7.setTransform(66.4,51.7);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#454545").s().p("AgfBUIAXgyIg1h1IAUAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIADADIAiBPIAAAFIABAFIACgFIACgFIAhhPIACgDIAEgBIASAAIhFCiIgDAEQgBABgEAAg");
		this.shape_8.setTransform(46.7,56.4);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#454545").s().p("AA/BAIAAhPQAAgPgHgHQgGgIgNAAQgFAAgFACQgFACgEADQgDAEgDAGQgCAGAAAHIAABPIgUAAIAAhPQAAgPgGgIQgGgHgMAAQgIAAgHAEQgHAFgGAHIAABdIgWAAIAAh9IANAAQAFAAABAFIABANQAHgJAJgFQAJgGALAAQANAAAIAHQAHAHADAMQACgGAEgFQAFgFAFgEQAGgDAGgBIAMgCQAKAAAIADQAHAEAGAGQAFAGADAJQADAJAAALIAABPg");
		this.shape_9.setTransform(30.7,54.2);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#454545").s().p("AgLBMQgJgJABgPIAAhMIgQAAIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgIIAUgDIAFgnIACgDIADgBIAJAAIAAArIAlAAIAAAQIglAAIAABKQAAAIAFAEQADAEAHAAIAFgBIAFgCIADgCIADgBQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAHALQgHAFgIADQgHADgKAAQgNAAgHgIg");
		this.shape_10.setTransform(132.4,20.4);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#454545").s().p("AgbA8QgIgDgFgGQgGgHgCgIQgDgJAAgLIAAhPIAWAAIAABPQAAAOAHAIQAGAIANAAQAJAAAIgFQAIgEAIgIIAAhcIAWAAIAAB9IgNAAQgFAAgBgFIgCgOQgIAKgLAFQgKAGgLAAQgLAAgHgEg");
		this.shape_11.setTransform(120.7,22.4);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#454545").s().p("AgjBUQgQgHgLgMQgMgMgGgRQgHgRAAgTQAAgTAHgQQAGgSAMgLQALgMAQgIQARgGASAAQATAAARAGQAQAIALAMQAMAMAHARQAGAQAAATQAAATgGARQgHARgMAMQgLAMgQAHQgRAHgTAAQgSAAgRgHgAgZhAQgLAEgJAJQgIAKgEANQgFANAAAPQAAAQAFANQAEANAIAJQAJAJALAFQAMAFANAAQAOAAAMgFQALgFAJgJQAIgJAEgNQAFgNAAgQQAAgPgFgNQgEgNgIgKQgJgJgLgEQgMgFgOAAQgNAAgMAFg");
		this.shape_12.setTransform(103.9,19.7);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#454545").s().p("AAhBbIgEgBIgEgDIgng0IgFgDIgFgBIgGAAIAAA8IgWAAIAAi1IAWAAIAABqIAGAAIAEgBIAEgCIAlgpIAEgEIAFgBIAUAAIguAwIgDADIgDADIADAEIADAEIAyA+g");
		this.shape_13.setTransform(83.3,19.5);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#454545").s().p("AgQA9QgKgFgIgJQgHgHgFgNQgEgMAAgPQAAgMAEgMQAEgMAHgJQAIgJALgFQALgFANABQANAAAKADQAKAFAIAIIgGAIIgCACIgDABIgEgCIgFgDIgIgDQgFgCgHAAQgJAAgGADQgHAEgEAGQgFAGgDAJQgCAIAAAKQAAALADAJQACAJAFAGQAFAGAGAEQAGACAIAAQAIAAAFgBIAJgFIAGgEQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAHAJQgJAKgMAEQgMAEgOAAQgKAAgKgDg");
		this.shape_14.setTransform(70.4,22.3);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#454545").s().p("AgSA9QgLgFgIgJQgIgJgFgMQgEgNAAgOQAAgNAEgLQAEgMAHgIQAIgJALgFQALgFAMABQALAAAKADQAJAEAHAHQAHAHAEALQAEAKAAAOIgBAHQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIhSAAQAAALADAJQADAJAFAHQAFAGAIADQAHACAHAAQAIAAAGgBIALgFIAHgEQADgCACAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABIAHAJQgFAEgFAEIgNAGIgNAEIgOAAQgLAAgLgDgAAjgMQAAgIgCgGQgCgHgEgFQgEgEgGgCQgGgEgIAAQgOAAgJAKQgJAKgDAQIBDAAIAAAAg");
		this.shape_15.setTransform(57.8,22.3);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#454545").s().p("AAeBbIAAhQQAAgNgGgHQgHgJgOAAQgIAAgIAGQgJAEgHAIIAABbIgWAAIAAi1IAWAAIAABKQAIgJAKgFQAKgFALAAQAKAAAIADQAIAEAGAGQAEAHADAIQADAHAAALIAABQg");
		this.shape_16.setTransform(44.5,19.5);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#454545").s().p("AgXBUQgQgGgLgNQgLgMgGgRQgGgQgBgUQAAgTAHgQQAHgSAMgLQALgMARgIQARgGARAAQAUAAAPAGQAOAGAMAKIgJAMIgBACIgEABIgEgBIgDgEIgGgDIgJgEIgKgDIgPgBQgOAAgKAFQgMAEgJAKQgIAJgEANQgGAOABAOQgBAQAGANQAEANAIAKQAJAIALAFQALAFAMAAIAOgBIAMgDIAKgFIAJgHQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAKAKQgLANgQAHQgPAHgXAAQgRAAgQgHg");
		this.shape_17.setTransform(28.9,19.7);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(80));

		// Layer 2
		this.instance = new lib.Symbol1();
		this.instance.setTransform(213.1,35,1,1,0,0,0,35,35);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({x:222.1},0).wait(1).to({x:231.1},0).wait(1).to({x:240.1},0).wait(1).to({x:249.1},0).wait(1).to({x:258.2},0).wait(1).to({x:267.2},0).wait(1).to({x:276.2},0).wait(1).to({x:285.2},0).wait(1).to({x:294.3},0).wait(1).to({x:303.3},0).wait(1).to({x:312.3},0).wait(1).to({x:321.3},0).wait(1).to({x:330.4},0).wait(1).to({x:339.4},0).wait(1).to({x:348.4},0).wait(1).to({x:357.4},0).wait(1).to({x:366.5},0).wait(1).to({x:375.5},0).wait(1).to({x:384.5},0).wait(1).to({x:393.5},0).wait(1).to({x:402.6},0).wait(1).to({x:411.6},0).wait(1).to({x:420.6},0).wait(1).to({x:429.6},0).wait(1).to({x:438.7},0).wait(1).to({x:447.7},0).wait(1).to({x:456.7},0).wait(1).to({x:465.7},0).wait(1).to({x:474.8},0).wait(1).to({x:483.8},0).wait(1).to({x:492.8},0).wait(1).to({x:501.8},0).wait(1).to({x:510.9},0).wait(1).to({x:519.9},0).wait(1).to({x:528.9},0).wait(1).to({x:537.9},0).wait(1).to({x:547},0).wait(1).to({x:556},0).wait(1).to({x:565},0).wait(1));

		// Layer 1
		this.instance_1 = new lib.Symbol1();
		this.instance_1.setTransform(565,35,1,1,0,0,0,35,35);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:556},0).wait(1).to({x:547},0).wait(1).to({x:537.9},0).wait(1).to({x:528.9},0).wait(1).to({x:519.9},0).wait(1).to({x:510.9},0).wait(1).to({x:501.8},0).wait(1).to({x:492.8},0).wait(1).to({x:483.8},0).wait(1).to({x:474.8},0).wait(1).to({x:465.7},0).wait(1).to({x:456.7},0).wait(1).to({x:447.7},0).wait(1).to({x:438.7},0).wait(1).to({x:429.6},0).wait(1).to({x:420.6},0).wait(1).to({x:411.6},0).wait(1).to({x:402.6},0).wait(1).to({x:393.5},0).wait(1).to({x:384.5},0).wait(1).to({x:375.5},0).wait(1).to({x:366.5},0).wait(1).to({x:357.4},0).wait(1).to({x:348.4},0).wait(1).to({x:339.4},0).wait(1).to({x:330.4},0).wait(1).to({x:321.3},0).wait(1).to({x:312.3},0).wait(1).to({x:303.3},0).wait(1).to({x:294.3},0).wait(1).to({x:285.3},0).wait(1).to({x:276.2},0).wait(1).to({x:267.2},0).wait(1).to({x:258.2},0).wait(1).to({x:249.1},0).wait(1).to({x:240.1},0).wait(1).to({x:231.1},0).wait(1).to({x:222.1},0).wait(1).to({x:213.1},0).to({_off:true},1).wait(40));

		// Layer 4
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("EgvOgF5MBedAAAIAALzMhedAAAg");
		this.shape_18.setTransform(299.9,35.5);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#18BC9C").s().p("EgvOAF6IAArzMBedAAAIAALzg");
		this.shape_19.setTransform(299.9,35.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(80));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(296.6,31.6,606.7,77.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
