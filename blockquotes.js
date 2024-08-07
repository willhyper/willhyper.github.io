const tweets = [
    {
        blockquote : `<blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">Segment and classify kidney structures via laparoscopic OCT. The glomerulus structure is a key indicator of kidney health. 
                    <a href="https://t.co/f8eHcH0wGq">pic.twitter.com/f8eHcH0wGq</a></p>&mdash; Chao-Wei Chen (@willhyper) 
                    <a href="https://twitter.com/willhyper/status/1805720527602074051?ref_src=twsrc%5Etfw">June 25, 2024</a>
                </blockquote>`
    },
    {
        blockquote:`<blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">Image processing macroporous hydrogel scaffolds to see how happy cells are in those tissue-mimicking environments. 
                    <a href="https://t.co/eNwUgAmFPT">pic.twitter.com/eNwUgAmFPT</a></p>&mdash; Chao-Wei Chen (@willhyper) 
                    <a href="https://twitter.com/willhyper/status/1805705243092713627?ref_src=twsrc%5Etfw">June 25, 2024</a>
            </blockquote>`
    },
    {
        blockquote:`<blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">characterize optical coherence tomography (OCT) 3D resolution by imaging point spread function of sub-resolution particles.
                    <br><br>captured PSF is used as feedback to calibrate OCT systems for an optimal shape of the PSF to improve system resolution. 
                    <a href="https://t.co/ApVotTws8X">pic.twitter.com/ApVotTws8X</a></p>&mdash; Chao-Wei Chen (@willhyper) 
                    <a href="https://twitter.com/willhyper/status/1805711485211230640?ref_src=twsrc%5Etfw">June 25, 2024</a>
            </blockquote>`
    },
    {
        blockquote:`<blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">my finger print under a laparoscopic optical coherence tomography. Look at those canonical images of sweat glands! 
                    <a href="https://t.co/2IlJ9ZDav4">pic.twitter.com/2IlJ9ZDav4</a></p>&mdash; Chao-Wei Chen (@willhyper) 
                    <a href="https://twitter.com/willhyper/status/1805714945935556832?ref_src=twsrc%5Etfw">June 25, 2024</a>
                </blockquote>`
    },
    {
        blockquote:`<blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">“Either write something worth reading or do something worth writing.” - Benjamin
                Franklin. I’ve been running this study group with Chao-Wei Chen for the past 2 years and would love
                to share what I’ve learned. Please help me to share this if you like it. 
                    <a href="https://t.co/nlBTxpjj7N">https://t.co/nlBTxpjj7N</a></p>&mdash; Daw-Ran Liou (@dawranliou)
                    <a href="https://twitter.com/dawranliou/status/988840234266738688?ref_src=twsrc%5Etfw">April 24, 2018</a>
                </blockquote>`
    },
    {
        blockquote:`<blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">a satisfying experiment when journeying reduce: sending operation to alter
                    sequence, using the reduce contract. <br>(defn seq-op [s op] (conj s (op s)))<br>(defn fib-op [s](+
                    (first s) (second s)))<br>(reduce seq-op &#39;(1 1) (repeat 5 fib-op)); (13 8 5 3 2 1 1)</p>&mdash;
                    chaowei (@willhyper) 
                    <a href="https://twitter.com/willhyper/status/1282081156498776065?ref_src=twsrc%5Etfw">July 11, 2020</a>
            </blockquote>`
    },
    {
        blockquote:`<blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">A simple way to determine if 2 line segments intersect: <br><br>(defn intersect? [[A B] [C D]]<br> (convex-quadrilateral? A C B D))
                    <a href="https://t.co/AglP7bTOI8">https://t.co/AglP7bTOI8</a>
                </p>&mdash; Chao-Wei Chen (@willhyper) 
                    <a href="https://twitter.com/willhyper/status/1345416737160790017?ref_src=twsrc%5Etfw">January 2, 2021</a>
            </blockquote>`
    }];


// Append blockquotes to the appropriate container
document.addEventListener("DOMContentLoaded", function() {
    
    var lefts = '';
    var rights = '';
    tweets.forEach((tweet, index) => {        
        if (index % 2 === 0) {
            lefts += tweet.blockquote;
        }
        else{
            rights += tweet.blockquote;
        }        
    });
    
    const blockquoteContainer = document.querySelector("#blockquote-container");
    blockquoteContainer.innerHTML += 
    `<div class="column" align="right">${rights}</div>
     <div class="column" align="left">${lefts}</div>`
});
