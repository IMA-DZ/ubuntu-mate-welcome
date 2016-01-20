function WelcomeCtrl($scope) {

}

// Consistent on all pages.
var global_footer_left = '<div id="social" class="pull-left">' +
        '<a href="cmd://link?https://plus.google.com/communities/108331279007926658904"><img src="img/social/google+.svg"></a>' +
        '<a href="cmd://link?https://www.facebook.com/UbuntuMATEedition/"><img src="img/social/facebook.svg"></a>' +
        '<a href="cmd://link?https://twitter.com/ubuntu_mate"><img src="img/social/twitter.svg"></a>' +
        '<a href="cmd://link?https://ubuntu-mate.org"><img src="img/humanity/website.svg"></a>' +
        '<a href="cmd://link?https://ubuntu-mate.org/donate/"><img src="img/humanity/donate.svg"></a>' +
      '</div>';

var global_footer_right = '<a href="cmd://quit" class="btn btn-inverse">Close</a>';
var global_scrollToTop = '<a href="#" id="scrollTop" class="navigation-button"><span class="fa fa-chevron-up"></span></a>';

// Global across all pages
$(window).load(function() {
    // Smoothly fade into the page.
    $('.entire-page-fade').fadeIn('medium');
});

// Smoothly fade out of the page.
function smoothOut(target_href) {
    $('.entire-page-fade').fadeOut('medium');
    $('#navigation-title').fadeOut('medium');
    $('#menu-button').fadeOut('medium');
    setTimeout(function(){
        window.location.href = target_href;
    }, 400);
}

$(document).ready(function() {
  // Animate navigation elements on page load
    $('#menu-button').jAnimateOnce('fadeInLeft');
    $('#navigation-title').jAnimateOnce('fadeInDown');

  // Write shared elements
  $('#footer-left').append(global_footer_left);
  $('#footer-right').append(global_footer_right);
  $('#footer').append(global_scrollToTop);

  // Initalize scroll to the top
  $(window).scroll(function () {
      if ($(this).scrollTop() > 90) {
          $('#scrollTop').fadeIn();
      } else {
          $('#scrollTop').fadeOut();
      }
  });

  $('#scrollTop').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      return false;
  });

});

// Smoothly fade between two elements (by ID)
function smoothFade(from, to) {
  $(from).fadeOut();
  setTimeout(function(){ $(to).fadeIn(); }, 400 );
}

// Smoothly fade the navigation sub-title
function changeSubtitle(textToDisplay) {
  // Smoothly fade subtitle
  $('#navigation-sub-title').fadeOut();
  setTimeout(function() {
    $('#navigation-sub-title').html(textToDisplay);
    $('#navigation-sub-title').fadeIn();
  }, 400);
}

// For pages that depend on an internet connection, but Welcome couldn't connect.
function reconnectTimeout() {
  if ( ! $('#reconnectFailed').is(':visible') ) {
    $('#reconnectFailed').fadeIn();
  } else {
    $('#reconnectFailed').jAnimateOnce('pulse');
  }
}


// Main Menu Only = Animation
if ( document.location.href.match(/[^\/]+$/)[0] == 'index.html' ) {

  // Animate elements of the page
  $('#mainLogo').jAnimateOnce('rotateIn');
  $('#open-at-start').jAnimateOnce('fadeIn');
  setTimeout(function(){
    $('#mate-blur').jAnimateOnce('zoomIn');
    $('#mate-blur').show();
  }, 50);

  function exitMenu(target) {
      $('#mate-blur').jAnimateOnce('zoomOut');
      smoothOut(target)
  }

  // Have we greeted the user already?
  if ( document.cookie == 'greeted=yes' ) {

    $(document).ready(function () {
      $(".fade").removeClass("fade");
      $(".fade-1s").removeClass("fade-1s");
      $(".fade-2s").removeClass("fade-2s");
      $(".fade-3s").removeClass("fade-3s");
      $(".fade-4s").removeClass("fade-4s");
      $(".fade-5s").removeClass("fade-5s");
    });
  }

  // When Welcome first runs, thank the user.
  if ( document.cookie == '') {
    $('#textChoose').hide();
    $('#textThanks').fadeIn('fast');

    setTimeout(function(){
      $('#textThanks').fadeOut('slow');
    }, 5000);

    setTimeout(function(){
      $('#textChoose').fadeIn('slow');
    }, 5600);

    document.cookie="greeted=yes";
  }

  // Sssh... You found the little secrets! ;)
  //// Logo starts to animate after a minute.
    setTimeout(function(){
      $('#mainLogo').jAnimateOnce('tada');
    }, 60000);

    setTimeout(function(){
      $('#mainLogo').jAnimateOnce('flip');
    }, 60000);

    setTimeout(function(){
      $('#mainLogo').jAnimateOnce('rotateOut');
    }, 70000);

    setTimeout(function(){
      $('#mainLogo').jAnimateOnce('rotateIn');
    }, 71000);

    setTimeout(function(){
      $('#mainLogo').jAnimateOnce('rollOut');
    }, 80000);

    setTimeout(function(){
      $('#mainLogo').jAnimateOnce('rollIn');
    }, 81000);

    setTimeout(function(){
      $('#mainLogo').jAnimateOnce('zoomOut');
    }, 90000);

    setTimeout(function(){
      $('#mainLogo').jAnimateOnce('zoomIn');
    }, 91000);

    function create_canvas() {
      $('#special').html('<canvas id="confetti" width="100%" height="100%" style="z-index: -1000; position: absolute; top: 0px; left: 0px;"></canvas>');
      $('#mainLogo').jAnimateOnce('pulse');
      startConfetti();
    }

  //// Ubuntu MATE's Birthday
    // Become official flavour on 26/Feb/2015
    var officialDay = 26; // (1-31)
    var officialMonth = 2; // (1-12)
    var officialYear = 2015;
    // Celebrate Distro's Birthday
    var today = new Date();
    if ( today.getMonth() == officialMonth ) {
      if ( today.getDate() == officialDay ) {
        var age = today.getFullYear() - officialYear;
        $('#textChoose').html("The distro become an official flavour " + age + " years ago.");
        create_canvas();
      } else {
        checkEventDate(officialDay,officialMonth,"the distro's official status anniversary")
      }
    } else {
      checkEventDate(officialDay,officialMonth,"the distro's official status anniversary")
    }

    // Project started on 21/Jun/2014
    var birthdayDay = 21; // (1-31)
    var birthdayMonth = 6; // (1-12)
    var birthdayYear = 2014;
    // Celebrate Distro's Birthday
    var today = new Date();
    if ( today.getMonth() == birthdayMonth ) {
      if ( today.getDate() == birthdayDay ) {
        var age = today.getFullYear() - birthdayYear;
        $('#textChoose').html("The project is " + age + " years old today. Happy Birthday!");
        create_canvas();
      } else {
        checkEventDate(birthdayDay,birthdayMonth,"the distro's birthday")
      }
    } else {
      checkEventDate(birthdayDay,birthdayMonth,"the distro's birthday")
    }


    // Celebrate New Year
    var today = new Date();
    if ( today.getMonth() == 12 && today.getDate() == 31 ) {
      $('#textChoose').html("Happy New Year from Ubuntu MATE!");
      create_canvas();
    }
    if ( today.getMonth() == 01 && today.getDate() == 01 ) {
      $('#textChoose').html("Happy New Year from Ubuntu MATE!");
      create_canvas();
    }

    // Celebrate Distro's Releases
    function checkReleaseDay(dd,mm,yyyy,release) {
      var today = new Date();
      if ( today.getFullYear() == yyyy ) {
        if ( today.getMonth() == mm - 1 ) {
          if ( today.getDate() == dd ) {
            if ( today.getFullYear() == yyyy ) {
              $('#textChoose').html("Today marks the release of Ubuntu MATE "+release+".");
              create_canvas();
            } else {
              checkEventDate(dd,mm,'the release of '+release)
            }
          } else {
              checkEventDate(dd,mm,'the release of '+release)
          }
        } else {
            checkEventDate(dd,mm,'the release of '+release)
        }
      }
    }

    // Determine day of year
    function dayOfYear(day,month) {
      // Assumes 'month' parameter is in base 0.
      var now = new Date();
      now.setMonth(month);
      now.setDate(day);
      var start = new Date(now.getFullYear(), 0, 0);
      var diff = now - start;
      var oneDay = 1000 * 60 * 60 * 24;
      var yearDay = Math.floor(diff / oneDay);
      return yearDay;
    }

    // Is an event upcoming or has it already passed?
    function checkEventDate(day,month,event) {
      month = month - 1; // JS uses base 0.
      var now = new Date();
      today_year_number = parseInt(dayOfYear(now.getDate(),now.getMonth()));
      event_year_number = parseInt(dayOfYear(day,month));

      // Event was 7 days before now.
      for (d=1; d<=7; d++) {
        past_year_number = parseInt(today_year_number-d)
        if ( past_year_number == event_year_number ) {
          if ( d == 1 ) {
            $('#textChoose').html("It was " + event + " yesterday.");
          } else {
            $('#textChoose').html("It was " + event + " " + d.toString() + " days ago.");
          }
          create_canvas();
        }
      }

      // Event will be 7 days after today.
      for (d=1; d<=7; d++) {
        future_year_number = parseInt(today_year_number+d)
        if ( future_year_number == event_year_number ) {
          if ( d == 1 ) {
            $('#textChoose').html("It's going to be " + event + " tomorrow.");
          } else {
            $('#textChoose').html("It's going to be " + event + " in " + d.toString() + " days time.");
          }
          create_canvas();
        }
      }
      // FIXME: Determine between year changes.
    }

  //// Release Dates
    // TODO / Possible Improvement: Retrieve list from server.
    // Dates written here are human-readable, in other words, base 1 (1-12).
    // DD,MM,YYYY
    checkReleaseDay(04,01,2015,'16.04 Alpha 1');
    checkReleaseDay(28,01,2016,'16.04 Alpha 2');
    checkReleaseDay(25,02,2016,'16.04 Beta 1');
    checkReleaseDay(24,03,2016,'16.04 Beta 2');
    checkReleaseDay(21,04,2016,'16.04');

}


// Introduction/Features = Animation
if ( document.location.href.match(/[^\/]+$/)[0] == 'introduction.html' || document.location.href.match(/[^\/]+$/)[0] == 'features.html' ) {
  new WOW().init();
}


// Software Page Only = Categories for Apps
if ( document.location.href.match(/[^\/]+$/)[0] == 'software.html' ) {

    // Initial variables.
    var currentCategory;
    var hideNonFree = false;
    var system_info = '';
    var system_arch = 'unknown';

    // Show the first category.
    currentCategory = '#Intro';
    $(currentCategory).jAnimateOnce('zoomInLeft');
    $(currentCategory).removeClass('hideSection');

    // Switch to another category.
    function switchCategory(now, next, subtitle) {
        // Smoothly fade subtitle
        changeSubtitle(subtitle);

        // Fade in non-free toggle as it starts hidden, except on the Misc. page,
        // where it's replaced by a command visibility toggle.
        if ( next == '#Misc' ) {
          smoothFade('#nonFreeToggle','#MiscCmd');
        } else {
          smoothFade('#MiscCmd','#nonFreeToggle');
        }

        // Animate out, then animate in next category.
        $(now).fadeOut('fast');
        setTimeout(function() {
          $(now).addClass('hideSection');
          currentCategory = next;
          $(next).removeClass('hideSection');
          $(next).show();
          $(next).jAnimateOnce('fadeInDown');
        }, 250);

        // FIXME: Logic flawed! Some apps will appear on architectures
        // but because they have a 'proprietary' class, they will for now.

        // Force hide apps unsupported on this platform.
        if ( system_arch == 'i686' ) {
            $('.i686-only').show();
            $('.x86_64-only').hide();
            $('.pc-only').show();
            $('.rpi-only').hide();
        } else if ( system_arch == 'x86_64' ) {
            $('.i686-only').hide();
            $('.x86_64-only').show();
            $('.pc-only').show();
            $('.rpi-only').hide();
        } else {
            // FIXME: Dirty guess until better implementation (dynamic apps)
            // but assume if not a PC, then it's a Raspberry Pi.
            $('.i686-only').hide();
            $('.x86_64-only').hide();
            $('.pc-only').hide();
        }


        // Force hide 'non-free' if checked previously.
        if ( hideNonFree == true ) {
            $('.proprietary').hide();
            $('.alternate').show();
        } else {
            $('.proprietary').show();
            $('.alternate').hide();
        }

        return currentCategory;
    }

    // Show small label while hovering categories.
    function hoverCategoryTab(text,menuItemID) {
      $('#categoryHover').html(text);
      $('#categoryHover').show();

      var x = $(menuItemID).position();
      var length = $('#categoryHover').width();
      $('#categoryHover').css('left', (x.left+24) - (90/2) )
    }

    // A category tab is clicked.
    function changeCategoryTab(id,humanText) {
      switchCategory(currentCategory, id, humanText);
      $('#categoryHover').fadeOut()
    }

    // Show the popover on hover
    $('[rel=freedominfo]').popover({
        html : true,
        content: function() {
          return $('#popover_content_wrapper').html();
        }
    });

    // Hide Proprietary Toggle
    $('#nonFreeToggle').on('click', function (e) {
      if ( hideNonFree == true ) {
          // Toggle it OFF - Show non-free software.
          hideNonFree = false;
          $("#nonFreeCheckBox").addClass("fa-square");
          $("#nonFreeCheckBox").removeClass("fa-check-square");
          $('.proprietary').fadeIn();
          $('.alternate').fadeOut();
      } else {
          // Toggle it ON - Hide non-free software.
          hideNonFree = true;
          $("#nonFreeCheckBox").removeClass("fa-square");
          $("#nonFreeCheckBox").addClass("fa-check-square");
          $('.proprietary').fadeOut();
          $('.alternate').fadeIn();
      }
    });

    // Icon filenames of apps to feature at random.

    // A variety of apps that all kinds of users can identify:
    // gamers, media enthusiasts, programmers and the average users.

    // TODO: There's probably a better way to do this. (Dynamic apps?)
    var featuredApps = new Array();
    featuredApps.push('audacity');
    featuredApps.push('bleachbit');
    featuredApps.push('blender');
    featuredApps.push('control-centre');
    featuredApps.push('darktable');
    featuredApps.push('dropbox');
    featuredApps.push('geany');
    featuredApps.push('gimp');
    featuredApps.push('google-chrome');
    featuredApps.push('google-musicmanager');
    featuredApps.push('gpick');
    featuredApps.push('handbrake');
    featuredApps.push('inkscape');
    featuredApps.push('insync');
    featuredApps.push('minecraft');
    featuredApps.push('mumble');
    featuredApps.push('pavucontrol');
    featuredApps.push('pitivi');
    featuredApps.push('remmina');
    featuredApps.push('rhythmbox');
    featuredApps.push('shotwell');
    featuredApps.push('simplescreenrecorder');
    featuredApps.push('skype');
    featuredApps.push('spotify');
    featuredApps.push('steam');
    featuredApps.push('synaptic');
    featuredApps.push('syncthing');
    featuredApps.push('telegram');
    featuredApps.push('thunderbird');
    featuredApps.push('ubuntu-software-center');
    featuredApps.push('uget');
    featuredApps.push('veracrypt');
    featuredApps.push('virtualbox');
    featuredApps.push('vlc');
    featuredApps.push('libreoffice-base');
    featuredApps.push('opera');
    featuredApps.push('evolution');
    featuredApps.push('dvd');
    featuredApps.push('playonlinux');
    featuredApps.push('virt-manager');
    featuredApps.push('gparted');
    featuredApps.push('emby');
    featuredApps.push('aptik');
    featuredApps.push('easytag');
    featuredApps.push('owncloud');
    featuredApps.push('rednotebook');
    featuredApps.push('enpass');
    featuredApps.push('glade');
    featuredApps.push('btsync');
    featuredApps.push('audio-recorder');
    featuredApps.push('poedit');
    featuredApps.push('minecraft');
    featuredApps.push('caja-share');
    featuredApps.push('git-cola');
    featuredApps.push('gnucash');
    featuredApps.push('kdeconnect');
    featuredApps.push('sweethome3d');
    featuredApps.push('gnote');
    featuredApps.push('bzr');
    featuredApps.push('stellarium');
    featuredApps.push('dia');
    featuredApps.push('gobby');
    featuredApps.push('planner');
    //~ featuredApps.push('kodi');

    // Add application to the grid.
    var iconID = 0;
    function addToGrid(icon) {
      iconID++;
      $('#featuredGrid').append('<img src="img/applications/'+icon+'.png" id="appIcon' + iconID + '" class="gridHidden" />');
    }

    // Randomly populate apps into the grid.
    var random;
    var a = 0;
    while (a < 16) {
      random = Math.floor(Math.random() * featuredApps.length);
      if (featuredApps[random] != "OK" ) {
          addToGrid(featuredApps[random]);
          featuredApps[random] = "OK";
          a++;
      }
    }

    // Set classes to create a semi-circle fade effect.
    $('#appIcon1').addClass('gridOuter');
    $('#appIcon2').addClass('gridOuter');
    $('#appIcon3').addClass('gridOuter');
    $('#appIcon4').addClass('gridOuter');
    $('#appIcon5').addClass('gridOuter');
    $('#appIcon8').addClass('gridOuter');
    $('#appIcon9').addClass('gridOuter');
    $('#appIcon12').addClass('gridOuter');
    $('#appIcon13').addClass('gridOuter');
    $('#appIcon14').addClass('gridOuter');
    $('#appIcon15').addClass('gridOuter');
    $('#appIcon16').addClass('gridOuter');

    $('#appIcon6').addClass('gridInner');
    $('#appIcon7').addClass('gridInner');
    $('#appIcon10').addClass('gridInner');
    $('#appIcon11').addClass('gridInner');

    // Gently fade the icons into view.
    setTimeout(function(){ $('#appIcon1').removeClass('gridHidden'); }, 800 );

    setTimeout(function(){ $('#appIcon2').removeClass('gridHidden'); }, 850 );
    setTimeout(function(){ $('#appIcon5').removeClass('gridHidden'); }, 850 );
    setTimeout(function(){ $('#appIcon6').removeClass('gridHidden'); }, 850 );

    setTimeout(function(){ $('#appIcon3').removeClass('gridHidden'); }, 900 );
    setTimeout(function(){ $('#appIcon6').removeClass('gridHidden'); }, 900 );
    setTimeout(function(){ $('#appIcon9').removeClass('gridHidden'); }, 900 );

    setTimeout(function(){ $('#appIcon4').removeClass('gridHidden'); }, 950 );
    setTimeout(function(){ $('#appIcon7').removeClass('gridHidden'); }, 950 );
    setTimeout(function(){ $('#appIcon10').removeClass('gridHidden'); }, 950 );
    setTimeout(function(){ $('#appIcon13').removeClass('gridHidden'); }, 950 );

    setTimeout(function(){ $('#appIcon8').removeClass('gridHidden'); }, 1000 );
    setTimeout(function(){ $('#appIcon11').removeClass('gridHidden'); }, 1000 );
    setTimeout(function(){ $('#appIcon14').removeClass('gridHidden'); }, 1000 );

    setTimeout(function(){ $('#appIcon12').removeClass('gridHidden'); }, 1050 );
    setTimeout(function(){ $('#appIcon15').removeClass('gridHidden'); }, 1050 );

    setTimeout(function(){ $('#appIcon16').removeClass('gridHidden'); }, 1100 );

    // Misc Tab - Show commands if user wishes to know them.
    var showMiscCommands = false;
    $('.miscCmd').hide();

    $('#MiscCmd').click(function() {
      if ( showMiscCommands == false ) {
        // Show the terminal commands.
        showMiscCommands = true;
        $('.miscCmd').fadeIn();
        $("#MiscCheckbox").removeClass("fa-square");
        $("#MiscCheckbox").addClass("fa-check-square");
      } else {
        // Hide the terminal commands.
        showMiscCommands = false;
        $('.miscCmd').fadeOut();
        $("#MiscCheckbox").addClass("fa-square");
        $("#MiscCheckbox").removeClass("fa-check-square");
      }
    });
}


// Splash Only - Animation Sequence
if ( document.location.href.match(/[^\/]+$/)[0] == 'splash.html' ) {

  // Scenes - Delayed elements to appear
  $(document).ready(function()
  {
    // Override the footer to only display "Skip".
    $('#footer').html('<div class="footer-content"><div class="form"><a onclick="continueToPage(true)" class="btn btn-inverse">Skip</a></div></div>');

    $('#sceneA').removeClass('hideSection');
    $('#sceneA').jAnimateOnce('fadeIn');

    setTimeout(function(){ $('#circle1').fadeOut('medium');}, 1000);
    setTimeout(function(){ $('#circle2').fadeOut('medium');}, 1100);
    setTimeout(function(){ $('#circle3').fadeOut('medium');}, 1200);
    setTimeout(function(){ $('#circle4').fadeOut('medium');}, 1300);
    setTimeout(function(){ $('#circle5').fadeOut('medium');}, 1400);

    setTimeout(function(){
      $('#sceneA').removeClass('hideSection');
      $('#sceneA').fadeOut();
    }, 1500);

    setTimeout(function(){
      $('#sceneB').removeClass('hideSection');
      $('#sceneB').jAnimateOnce('zoomIn');
      $('body').addClass('fadeToMenu');
    }, 2000);

    setTimeout(function(){
      $('body').removeClass('fadeToMenu');
      $('body').css('background-color','#f4f4f4');
    }, 3000);

    setTimeout(function(){
      $('#sceneB').fadeOut();
    }, 4000);

    setTimeout(function(){
      continueToPage(false)
    }, 4300);

  });

  // In live sessions, show a "Hello" page instead to introduce ourselves.
  var splashNextPage = 'index'

  function continueToPage(skipped) {
    if ( skipped == true ) {
      $('body').addClass('fadeToMenu');
      $('#sceneA').fadeOut('medium');
      $('#sceneB').fadeOut('medium');
      setTimeout(function(){
          smoothOut(splashNextPage + '.html');
      }, 500);
    } else {
      smoothOut(splashNextPage + '.html');
    }

  }

}


// Getting Started Only - Index Pane for Selecting Topics
if ( document.location.href.match(/[^\/]+$/)[0] == 'gettingstarted.html' ) {

  function indexOpen() {
    // Is the index already open?
    if ($('#index-menu').is(':visible')) {
      indexClose();
    } else {
      // Open the Index
      $('#index-open').addClass('disabled');
      $('#index-open').prop('disabled', true);
      $("#index-overlay").fadeIn();
      $("#index-menu").show();
      $('#index-menu').jAnimateOnce('fadeInLeft');
    }
  }

  function indexClose() {
    $('#index-open').removeClass('disabled');
    $('#index-open').prop('disabled', false);
    if ($('#index-menu').is(':visible')) {
      $("#index-overlay").fadeOut();
      $('#index-menu').jAnimateOnce('fadeOutLeft',function(){
        $("#index-menu").hide();
      });
    }
  }

  function changePage(id,humanText) {
    // 'id' is one used for <div>.
    // 'humanText' is displayed on navigation's sub title.
    indexClose();
    $('.topicContents').fadeOut();
    $('#navigation-sub-title').fadeOut();

    // Smoothly fade between topics
    setTimeout(function() {
    $('#navigation-sub-title').html(humanText);
    $('#navigation-sub-title').fadeIn();
    $('#'+id).fadeIn();
    }, 500);
  }

  // Show initial page and index pane on page load
  changePage('initial','Choose a Topic');
  setTimeout(function() { indexOpen(); }, 500);
  $('#index-open').jAnimateOnce('fadeInDown');

  // Show additional information on the page based on checkbox state.
  $('.dualBootWin').hide();
  $('#showDualBootWin').click(function() {
    if ( $(this).prop('checked') == true ) {
      $('.dualBootWin').fadeIn();
    } else {
      $('.dualBootWin').fadeOut();
    }
  });

  // Graphics Detection
  // Must be executed shortly after page fully loads in order for variables to exist.
  setTimeout(function() {
    $('.graphics-vendor').html(graphicsVendor);
    $('#graphics-pci').html(graphicsGrep);

    // Auto detection alert initially displays "failed".
    if ( graphicsVendor == 'NVIDIA' ) {
      $('#graphics-detected').removeClass('alert-danger');
      $('#graphics-detected').addClass('alert-info');
      $('#graphics-brand').html('NVIDIA Graphics Card Detected.');
      $('#graphics-describe').html("NVIDIA may have drivers for your card that can boost performance for 3D applications and games as well as improved power management.");
      $('#graphics-proprietary').show();
      $('#graphics-open-source').html("<code>nouveau</code> is the open source driver for NVIDIA cards.");
      $('#graphics-nvidia-only').show();

    } else if ( graphicsVendor == "AMD" ) {
      $('#graphics-detected').removeClass('alert-danger');
      $('#graphics-detected').addClass('alert-info');
      $('#graphics-brand').html('AMD Graphics Card Detected.');
      $('#graphics-describe').html("AMD may have drivers for your card that can boost performance for 3D applications and games as well as improved power management.");
      $('#graphics-proprietary').show();
      $('#graphics-open-source').html("<code>radeon</code> is the open source driver for AMD cards.");

    } else if ( graphicsVendor == "Intel" ) {
      $('#graphics-detected').removeClass('alert-danger');
      $('#graphics-detected').addClass('alert-success');
      $('#graphics-brand').html("You're already good to go!");
      $('#graphics-describe').html("Intel's drivers are open source and are maintained in the kernel.");

    } else if ( graphicsVendor == "VirtualBox" ) {
      $('#graphics-detected').removeClass('alert-danger');
      $('#graphics-detected').addClass('alert-info');
      $('#graphics-brand').html("VirtualBox Guest Additions");
      $('#graphics-describe').html("To accelerate graphics performance inside the virtual machine, please install Guest Additions.");

    } else {
      // Obscure graphics chip or something we can't tell.
      $('#graphics-proprietary').show();
      $('.graphics-vendor').html('the manufacturer');
    }
  }, 1000);

  // Expand / Collapse sub-sections to keep it tidy.
  function toggleSub(divID,arrowID) {
    if ( $('#'+divID).is(":visible") ) {
      $('#'+divID).fadeOut();
      $('#'+arrowID).removeClass('fa-chevron-up');
      $('#'+arrowID).addClass('fa-chevron-down');
    } else {
      $('#'+divID).fadeIn();
      $('#'+arrowID).removeClass('fa-chevron-down');
      $('#'+arrowID).addClass('fa-chevron-up');
    }
  }

}


// Donate Only = Links for donations and spendings per month.
if ( document.location.href.match(/[^\/]+$/)[0] == 'donate.html' ) {

  var today = new Date();
  var cellID = '2014-0';

  // Add a Year = (New Row)
  function addYear(year) {
    $('#donationTable').append('<tr><th style="text-align:center" id="' + year + '">' + year + '</th>');
  }

  // Add a Month = (New Column)
  function addMonth(m,y) {
    cellID = y + '-' + m;
    $('#donationTable tr:last').append('<td id="' + cellID + '" style="text-align:center;"><a href="cmd://link?https://ubuntu-mate.org/blog/ubuntu-mate-' + numToMonth(m) + '-' + y + '-supporters/">' + numToShortMonth(m) + '</a></td>');
  }

  // Add a Blank Month = (New Column, Empty)
  function addBlankMonth(m,y) {
    cellID = y + '-' + m;
    $('#donationTable tr:last').append('<td id="' + cellID + '" style="text-align:center;"></td>');
  }

  // Close the Row
  function endYear() {
    $('#donationTable tr:last').append("</tr>");
  }

  // Convert month number to long/short string.
  function numToMonth(m) {
    switch (m) {
      case 0:
        return 'january';
        break;
      case 1:
        return 'february';
        break;
      case 2:
        return 'march';
        break;
      case 3:
        return 'april';
        break;
      case 4:
        return 'may';
        break;
      case 5:
        return 'june';
        break;
      case 6:
        return 'july';
        break;
      case 7:
        return 'august';
        break;
      case 8:
        return 'september';
        break;
      case 9:
        return 'october';
        break;
      case 10:
        return 'november';
        break;
      case 11:
        return 'december';
        break;
    }
  }
  function numToShortMonth(m) {
    switch (m) {
      case 0:
        return 'Jan';
        break;
      case 1:
        return 'Feb';
        break;
      case 2:
        return 'Mar';
        break;
      case 3:
        return 'Apr';
        break;
      case 4:
        return 'May';
        break;
      case 5:
        return 'Jun';
        break;
      case 6:
        return 'Jul';
        break;
      case 7:
        return 'Aug';
        break;
      case 8:
        return 'Sep';
        break;
      case 9:
        return 'Oct';
        break;
      case 10:
        return 'Nov';
        break;
      case 11:
        return 'Dec';
        break;
    }
  }

  // Determine if the date is Jan and set to Dec last year.
  function determineLastMonth() {
    lastMonthID = '#' + today.getFullYear() + '-' + (today.getMonth() - 1);

    // Before January?! Then we mean December last year.
    if ( today.getMonth()-1 == -1 ) {
      lastMonthID = '#' +  (today.getFullYear() - 1) + '-11';
    }
    return lastMonthID;
  }

  // Shade Recent Months
  function shadeCells() {
    // Determine current and last month
    currentMonthID = '#' + today.getFullYear() + '-' + today.getMonth();
    lastMonthID = determineLastMonth();

    // Shade today's month, year and show text (as it's a blank cell).
    $(currentMonthID).css('background-color','#87A556');
    $(currentMonthID).css('color','#fff');
    $(currentMonthID).css('font-weight','bold');
    $(currentMonthID).html(numToShortMonth(today.getMonth()));

    currentYearID = '#'+today.getFullYear();
    $(currentYearID).css('background-color','#87A556');
    $(currentYearID).css('color','#fff');
    $(currentYearID).css('font-weight','bold');

    // Lightly shade last month.
    $(lastMonthID).css('background-color','#CBD6BA');
    $(lastMonthID).css('color','#000');
    $(lastMonthID).css('font-weight','bold');

    // Start of new month? Give 3 days grace before showing the link, just to be sure it's unlikely to be a 404.
    if ( today.getDate() <= 3 ) {
      if ( ! today.getMonth()-1 == -1 ) {
        $(lastMonthID).html('<span class="fa fa-clock-o"></span> '+numToShortMonth(today.getMonth()-1));
      } else {
        $(lastMonthID).html('<span class="fa fa-clock-o"></span> '+numToShortMonth(11));
      }
    }
  }

  ////////////////////////////////

  // Donations started at the end of 2014.
  addYear('2014');
  for ( m = 0; m < 10; m++ ) { var y = 2014; addBlankMonth(m,y); }
  addMonth(10,2014);
  addMonth(11,2014);
  endYear();

  // Determine each year's blog posts since 2015
  for (y = 2015; y < today.getFullYear()+1; y++) {
    addYear(y);
    // Determine each month in that year
    for (m = 0; m < 12; m++) {
      if ( today.getFullYear() == y && today.getMonth() < m ) {
        addBlankMonth(m,y);
      } else {
        addMonth(m,y);
      }
    }
    endYear();
    shadeCells();
  }

}
