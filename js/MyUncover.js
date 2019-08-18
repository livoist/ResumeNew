/**
 * demo3.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
{
    // the settings for each one of the slides uncover instances.
    const uncoverOpts = [
        {
            // total number of slices. 切割的數目
            slicesTotal: 6,
            // slices color. 切割圖塊顏色
            slicesColor: 'white',
            // 'vertical' || 'horizontal'. 垂直方向/平行方向
            orientation: 'horizontal',
            // 'bottom' || 'top' for vertical orientation and 'right' || 'left' for horizontal orientation.
            //從左邊開始右邊結束
            slicesOrigin: {show: 'right', hide: 'right'}
        },
        {
            slicesTotal: 8, 
            slicesColor: 'white', 
            orientation: 'vertical', 
            slicesOrigin: {show: 'top', hide: 'top'}
        },
        {
            slicesTotal: 12,
            slicesColor: 'white',
            orientation: 'horizontal',
            slicesOrigin: {show: 'right', hide: 'right'}
        },
        {
            slicesTotal: 4,
            slicesColor: '#fff',
            orientation: 'vertical',
            slicesOrigin: {show: 'bottom', hide: 'bottom'}
        },
        // {
        //     slicesTotal: 16,
        //     slicesColor: '#fff',
        //     orientation: 'vertical',
        //     slicesOrigin: {show: 'bottom', hide: 'bottom'}
        // },
        // {
        //     slicesTotal: 4,
        //     slicesColor: '#fff',
        //     orientation: 'horizontal',
        //     slicesOrigin: {show: 'left', hide: 'left'}
        // },
        // {
        //     slicesTotal: 10,
        //     slicesColor: '#fff',
        //     orientation: 'vertical',
        //     slicesOrigin: {show: 'top', hide: 'top'}
        // },
        // {
        //     slicesTotal: 8,
        //     slicesColor: '#d60b3f',
        //     orientation: 'horizontal',
        //     slicesOrigin: {show: 'right', hide: 'right'}
        // },
        // {
        //     slicesTotal: 6,
        //     slicesColor: '#250bd6',
        //     orientation: 'vertical',
        //     slicesOrigin: {show: 'top', hide: 'top'}
        // }
    ];

    //anime.js的細項設定，持續時間/延遲時間(Math.random())/速度曲線
    const uncoverAnimation = [
        {
            show: {
                slices: {duration: 600, easing: 'easeInOutCirc', delay: (_,i) => i*100},
                // image: {
                //     duration: 1200,
                //     delay: 350,
                //     easing: 'easeOutCubic',
                //     scale: [1.3,1]
                // }
                //圖片的變化方式，持續時間/延遲時間/速度曲線/縮方比例[from,to]
            },
            hide: {
                slices: {duration: 300, easing: 'easeInOutCirc', delay: (_,i) => i*40}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => (t-i-1)*100, easing: 'easeInOutCirc'}
            },
            hide: {
                slices: {duration: 600, delay: (_,i,t) => (t-i-1)*100, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'}
            },
            hide: {
                slices: {duration: 300, delay: (_,i,t) => Math.abs(t/2-i)*40, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {delay: (_,i,t) => anime.random(0,t)*50}
            },
            hide: {
                slices: {duration: 300, delay: (_,i,t) => anime.random(0,t)*50}
            }
        },
        // {
        //     show: {
        //         slices: {duration: 1200, delay: (_,i) => i*150, easing: 'easeOutExpo'}
        //     },
        //     hide: {
        //         slices: {duration: 500, delay: (_,i) => i*150, easing: 'easeInOutExpo'}
        //     }
        // },
        // {
        //     show: {
        //         slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'}
        //     },
        //     hide: {
        //         slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'}
        //     }
        // },
        // {
        //     show: {
        //         slices: {duration: 400, delay: (_,i,t) => (t-i-1)*150, easing: 'easeInOutQuad'}
        //     },
        //     hide: {
        //         slices: {duration: 400, delay: (_,i,t) => (t-i-1)*30, easing: 'easeInOutQuad'}
        //     }
        // },
        // {
        //     show: {
        //         slices: {duration: 400, delay: (_,i,t) => Math.abs(t/4-i)*40, easing: 'easeInOutSine'},
        //         image: {
        //             duration: 900,
        //             easing: 'easeOutCubic',
        //             scale: [1.8,1]
        //         }
        //     },
        //     hide: {
        //         slices: {duration: 400, delay: (_,i,t) => Math.abs(t/4-i)*40, easing: 'easeInOutSine'}
        //     }
        // },
        // {
        //     show: {
        //         slices: {duration: 600, easing: 'easeInOutCirc', delay: (_,i) => i*50},
        //         image: {
        //             duration: 1200,
        //             delay: 350,
        //             easing: 'easeOutCubic',
        //             scale: [1.3,1]
        //         }
        //     },
        //     hide: {
        //         slices: {duration: 300, easing: 'easeInOutCirc', delay: (_,i) => i*30}
        //     }
        // },
    ];
    // intersectionRatio 目標可見屬性
    
    const items = Array.from(document.querySelectorAll('.u-col-1-2 > .imgbox'));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if ( entry.intersectionRatio > 0.5 ) {
                uncoverArr[items.indexOf(entry.target)].show(true, uncoverAnimation[items.indexOf(entry.target)].show);
            }
            else {
                uncoverArr[items.indexOf(entry.target)].hide(true, uncoverAnimation[items.indexOf(entry.target)].hide);
            }
        });
    }, { threshold: 0.5 });
    
    let uncoverArr = [];

    items.forEach((item, pos) => {
        uncoverArr.push(new Uncover(item.querySelector('.image'), uncoverOpts[pos]));
        observer.observe(item);
    });
}