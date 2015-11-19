DST=pdf
SRC=src

all:
	gulp

build:
	gulp render
	make -C $(SRC)
	make -C src render-clean

install:
	@mkdir $(DST)
	@mkdir $(SRC)/.render
	npm install

render-clean:
	make -C src render-clean

install-node-npm:
	sudo apt-get install nodejs
	sudo ln -s /usr/bin/nodejs /usr/bin/node
	sudo apt-get install npm
	sudo npm cache clean -f
	sudo npm install -g n
	sudo n stable
