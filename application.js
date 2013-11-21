console.log("I loaded application.js!");

$(function () {
  var backToTop = "<a href='#top'>Back to Top</a>";
  $("div.article").append(backToTop);

  var tableOfContents = "<h2 id='toc'><a name='toc'>Table of Contents</a></h2>"
  var unorderedList = "<ul name='toc'></ul>"
  $("h1:first").after(tableOfContents)
  $("h1:first").after(unorderedList)


  $("div.article h2").css('background', '#CCF')
  $("div.article h2").each(function (){

    var title = $(this).text();
    var url = title.trim().toLowerCase().replace(" ","_");
    console.log(url);
    var targetAnchor = "<a name='" + url + "'/>";
    $(this).before(targetAnchor)
    console.log(title);
    var listItem = "<li>" + "<a href='#" + url + "'>" + title + "</a>"+  "</li>";
    $('#toc').append(listItem);

    var toggleLink = $("<a id='toggle-btn' href='#'>" + '(hide)' +"</a>");

    toggleLink.on('click', function(event){

      var newText = "";
      $(this).siblings().toggle();

      ($(this).text() === '(hide)') ? newText = "(show)" : newText = "(hide)";
      
      $(this).text(newText);
    });

    $(this).after(toggleLink);

  });

});
