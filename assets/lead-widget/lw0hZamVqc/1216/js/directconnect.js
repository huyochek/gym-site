
                    function getParams() {
                        var scripts = document.getElementsByTagName('script');
                        var res     = '';
                        if(scripts.length > 0)
                        {
                            for (i=0;i<scripts.length;i++){
                                res = null;
                                res = scripts[i].src.match(/\/js\/directconnect.js/g);
                                if( res != null )
                                {
                                    var srcParts = scripts[i].src.split('/js/directconnect.js');
                                    if (srcParts[0]!==undefined)
                                    {
                                        if( srcParts[0] != '' )
                                        {
                                            var srcPartsNew     = srcParts[0].split('/');
                                            var lastItem        = srcPartsNew.pop();
                                            var secondLastItem  = srcPartsNew[srcPartsNew.length - 1];
                                            var srcHost         = srcParts[0].split('/assets');

                                            const Http  = new XMLHttpRequest();
                                            Http.onreadystatechange = (e) => {
                                                if (Http.readyState == 4 && Http.status == 200) {
                                                    requestStatus = true;
                                                    let response = JSON.parse(Http.responseText);
                                                    if(response.show)
                                                    {
                                                        if(!window.jQuery)
                                                        {
                                                            var s = document.createElement('script');
                                                            s.type = 'text/javascript';
                                                            s.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
                                                            document.getElementsByTagName('head')[0].appendChild(s);
                                                            setTimeout(function(){
                                                                (function($){
                                                                  $(function(){
                                                                    $(document).ready(function(){
                                                                        var temp = $('<div id=leadWidgetContainer>');
                                                                        $('body').append(temp);
                                                                        $('#leadWidgetContainer').load('https://members.directconnect.com/assets/lead-widget/lw0hZamVqc/1216/html/lw0hZamVqc.html',function(){
                                                                            $(this).clone().appendTo('body').remove();
                                                                        });
                                                                      });
                                                                  });
                                                            })(jQuery)
                                                            }, 3000);
                                                        }
                                                        else
                                                        {
                                                            (function($){
                                                                  $(function(){
                                                                    $(document).ready(function(){
                                                                        var temp = $('<div id=leadWidgetContainer>');
                                                                        $('body').append(temp);
                                                                        $('#leadWidgetContainer').load('https://members.directconnect.com/assets/lead-widget/lw0hZamVqc/1216/html/lw0hZamVqc.html',function(){
                                                                            $(this).clone().appendTo('body').remove();
                                                                        });
                                                                      });
                                                                  });
                                                            })(jQuery)
                                                        }
                                                    }
                                                    return true;
                                                }
                                            }
                                            const url   = srcHost[0]+'/check-campaign-status?lastitem='+lastItem+'&secondlastitem='+secondLastItem;
                                            Http.open('GET', url, true);
                                            Http.send();
                                        }
                                    }
                                }
                            }
                        }
                    }getParams();