// This is the main javascript. It is the base for anything.
var AroundTheWorld = {};
var ATW = AroundTheWorld;

(function() {
	'use strict';

	var SCROLL_Y_MARGIN = 10;
	var INITIAL_NUMBER_PICTURES_TO_SHOW = 3;
	var LOAD_MORE_PICTURES = 2;

	AroundTheWorld.App = function () {
		var self = this;
		self.top = ko.observable(true);
		self.showingAllTrips = ko.observable(true);
		self.singleTrip = ko.observable();

		var navBarItems = [
			{
				title: "Home",
				id: "home"
			}
		]

		self.navBar = ko.observable(new ATW.NavBar());
		navBarItems.forEach(function (item) {
			self.navBar().items.push(new ATW.NavItemViewModel(item));
		});

		self.trips = ko.observableArray([]);
		var trips = [
			{
				title: "Hawaii",
				mainPicture: "/images/homeBackground.jpg",
				description: "Viatge a hawaii amb applebananas i moltes mes coses",
				pictures: [
					{
						url: "https://lh3.googleusercontent.com/GWsSbek_eLhIVSnh1DZD0nwVIy2S2HZqR6zvgL-pbJjdPFiipdEKpmXb77d8hr_B2j9a4HCUxzkXItXt2Ufn5_cH0LJykvyESAlbxpH3x7mv_q9IHJntazdeshvSfucMuSurh41i4YTALpUgkg1mbPfM9NsP4TmQyPKZqPpHgjsFYNd35w80rxtk-xHo70Nnd_jt5lbhdnV14iRX8uApI88Ofdb1Fa-NgHReWfczYrcCTQxAi8Ztp91vK_pxmI1WKYi6ekOM33LEejZ7gyiHA4UbeF6n3pwuhzgMDJkpbc-tFf3EYQOoqcSw-wAQxrugszdF3uAipYBcR6HbUj4zQ0BEIctJZBIOK53EqR5f0O_ebvnIb0RUct7KnpxlmVMecbTgJ-JMsZW20_8dowMOtfyJlAVM4uv5OanfD0bzFzADagNvAp-erIXWRd_JdjLdx9UcQ69vL2lyxkYrBIKyXLBQ0q-pfaeKkHEWXplRcn2AcE01UYtCCkumrxrS2OrudYroiKep1rY0gDMbVlW8FXuE2Hvkg_ZhSW9BHJZQv33mLERUHX16H_YIygsMmP9QWgEqyg=w956-h1274-no",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "https://lh3.googleusercontent.com/CJKKQgTOrCv9bVQvFKw_TNkpjT6KeKShDNdREnIyluZmgWe28GZ27IM4ozgVA2jGeV0PnSx9mT8T7fFHrEAMKIWini42UBiPJQwo2tOqtVNstFaJnpmjCPAuXdgUfpPsirVOU4TuWySW7Te6axLorNf1nbncKA2hJmK1GArVMrTDYvlamfuOr8YrJHDMO1RJZ1kOS-dBFjxBFXJFdKzag2W850eJi06JmLDEQJLP_MVWrAnKMeKm1MOlBLLbgHUWE5kjd1p2PPjsl1hwfzX5K5y-FI9yTKXxLjNH_hLY4-ynQ7jYg5yZ7IPzyei1k-J3DaNUJvC64vhiS2RKYy817vCsEDYqVQMJ9Gx1WWgxl1sx8WOf7XutzdpgldyU6RNHlADnYFozw5L18vjXLV3D_xwRNXyyG3WDY1q69aVnljRkZROYAfb59QXsWTmKVq3bTNqkdR9WdOfTE_XPQT8sY7lA-M_tJmy9quvHdPNkhg0Z4sbukP7FQOAGgh0N6um-vFU8p_3hek4w8OaqDwswDAzv6omWX8JPUWQoANZSMFQ7U70wc6TCL-3t3Pn_FeSflsc3Xw=w1700-h1274-no",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "https://lh3.googleusercontent.com/NZ-Pz5LFjyCHDpN0k5Uy547vijexk5xBWrEvTShVRyBEI0nDNKqER96wO8zzPfqVL0vqTVux8pLfSoROHYL2jBVwn1qzRDEQ093ao2k8_f-F5A-kGUoCGzTBy1nocGl2oNSyDajdFOMq7ezaSBBOjLvVcEKwgwiJAyGjbGuu37YzZW6AN1SUwMC4NKNhndY6FK3bwTJhUIVfqMVYQoGcgc27fl6aImNdY1NSheLMvA0cOaM9w0Gixr6ifkc30qr1kdlhIjKSj51o5hnHaOghIUTEpwCWidf9cAIkZesRytMgwY6rz0GJJpnVESG5raWePmYCoDPRcueN2ey8xJIxVyXjWcG46A7g5iOqQqCmim0wNLZ2ENYRI6M2eZsRBGdGUjVkBHv4YYe1wx0745fQ_FgUQtR76VbyTK6rPIB-NQsuKvSCakuUNQYEnoUKTP_GaAkyB4oMZUIea4l_rUWlPV4SI53J4XJ9NVMN_VHvTKyPOGWUYy_tasPr4885jGGDmUAtnzTGTO9APU_k_NohOJZjfTp2bgoWax6a-0hZZnHyu2qZhh9m-2ChdAOdKLDhxxBMtw=w1700-h1274-no",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
				]
			},
			{
				title: "Hawaii",
				mainPicture: "/images/homeBackground.jpg",
				description: "Viatge a hawaii amb applebananas i moltes mes coses",
				pictures: [
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
				]
			},
			{
				title: "Hawaii",
				mainPicture: "/images/homeBackground.jpg",
				description: "Viatge a hawaii amb applebananas i moltes mes coses",
				pictures: [
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
				]
			},
			{
				title: "Hawaii",
				mainPicture: "/images/homeBackground.jpg",
				description: "Viatge a hawaii amb applebananas i moltes mes coses",
				pictures: [
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
				]
			},
			{
				title: "Hawaii",
				mainPicture: "/images/homeBackground.jpg",
				description: "Viatge a hawaii amb applebananas i moltes mes coses",
				pictures: [
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
					{
						url: "/images/homeBackground.jpg",
						title: "titol de la foto",
						description: "descripcio foto"
					},
				]
			}
		];

		trips.forEach(function (trip) {
			self.trips.push(new ATW.TripViewModel(self, trip));
		});

        function scroll () {
            self.top(window.scrollY <= 0);
            self.navBar().highlightElement();

            if (!self.showingAllTrips() && !self.singleTrip().fullyLoaded()) {
            	self.singleTrip().loadMoreImages();
            }
        }

		self.initialize = function () {
            $(window).on("scroll", scroll);
            self.navBar().highlightElement();
		};

		self.goToTrip = function (tripVM) {
			self.singleTrip(tripVM);
			self.showingAllTrips(false);
			window.scroll(0, 0);
		};
	};

	AroundTheWorld.NavBar = function () {
		var self = this;
		self.items = ko.observableArray([]);

		self.highlightElement = function () {
			return;




			var currentY = window.scrollY;
			var found = false;
			for (var i = self.items().length - 1; i >= 0; i--) {
				var sectionY = $("#" + self.items()[i].id).position().top - SCROLL_Y_MARGIN;
				if (sectionY <= currentY && !found) {
					self.items()[i].selected(true);
					found = true;
				} else {
					self.items()[i].selected(false);
				}

			}

			// Just in case the user scrolls to negative positions
			if (!found) {
				self.items()[0].selected(true);
			}
		};
	};

	AroundTheWorld.NavItemViewModel = function (item) {
		var self = this;
		self.title = ko.observable(item.title);
		self.id = item.id;
		self.selected = ko.observable(false);

		self.scrollTo = function () {
			$('html,body').animate({
				scrollTop: ($("#" + self.id).position().top - SCROLL_Y_MARGIN) +'px'},
				'slow');
		};
	};

	AroundTheWorld.TripViewModel = function (parent, trip) {
		var self = this;
		self.parent = parent;
		self.title = ko.observable(trip.title);
		self.mainPicture = ko.observable(trip.mainPicture);
		self.pictures = ko.observableArray([]);
		self.picturesToShow = ko.observableArray([]);
		self.fullyLoaded = ko.observable(false);

		for (var i = 0; i < trip.pictures.length; i++) {
			self.pictures.push(new ATW.PictureViewModel(trip.pictures[i]));
		}

		self.loadMoreImages = function () {
			var totalLoadedPictures = self.picturesToShow().length;
			for (var i = totalLoadedPictures; i < totalLoadedPictures + LOAD_MORE_PICTURES; i++) {
				if (i < self.pictures().length) {
					self.picturesToShow.push(self.pictures()[i]);
					//$("#" + self.id()).find(".eventImage").load(self.showImage);
				}
			}

			self.fullyLoaded(self.pictures().length == self.picturesToShow().length);
		}

		self.goToTrip = function () {
			self.picturesToShow(self.pictures().slice(0, INITIAL_NUMBER_PICTURES_TO_SHOW));
			self.parent.goToTrip(self);
		};
	};

	AroundTheWorld.PictureViewModel = function (picture) {
		var self = this;
		self.url = ko.observable(picture.url);
		self.title = ko.observable(picture.title);
		self.description = ko.observable(picture.description);

		self.makeBig = function () {
			// implement
		}
	};
}());


$(document).ready(function() {
	AroundTheWorld.app = new AroundTheWorld.App();
	AroundTheWorld.app.initialize();
	ko.applyBindings(AroundTheWorld.app);
});