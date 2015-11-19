CC=pdflatex
SRC=.render
DST=../pdf
DOC=exemple

all: $(DOC).pdf

$(DOC).pdf: $(SRC)/$(DOC).tex
	$(CC) $<
	$(CC) $<
	mv $(DOC).pdf $(DST)

render-clean:
	rm -Rf .render/*

clean:
	rm -f $(DOC).aux $(DOC).toc $(DOC).log
