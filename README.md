# exercise 1 - basic jquery plugin

## run

$ server src

## resources

https://lokeshdhakar.com/projects/lightbox2/

## task
- [ ] bierzemy wersje plugin z poprzedniego zadania
- [ ] w momencie odpalenia dodoajmey pusty `div` do <body> z clasą css = options.backdropClass (domyślnie backdrop); domyślnie ten div jest niewidoczny, referenje zapisumy jako $backdrop
- [ ] po klinięciu wyświetlamy duze zdjęcie (bierzemy pod uwage rwd) na całym ekranie, w tle mamy czarne, półprzezroczyste tło (wykorzystujemy do tego $backdrop)
- [ ] jeżeli img ma atrybut data-url to wyświetlamy to zdjęcie, w przeciwnym przypadku wyświetlam to zdjęcie z src 
