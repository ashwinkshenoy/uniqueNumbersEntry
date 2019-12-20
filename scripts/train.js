const train = [
  {
    name: 'asd',
    trainNo: '1'
  },
  {
    name: 'asd',
    trainNo: '2'
  },
  {
    name: 'asd',
    trainNo: '3'
  },
  {
    name: 'asd',
    trainNo: '4'
  },
  {
    name: 'asd',
    trainNo: '5'
  }
];

function TrainTunnel(train, limit) {
  this.limit = limit;
  this.train = train;
  this.tunnel = [];
  this.i = 0

  if(train && train.length == 0) console.log('No Train');
  this.pushTrain();
}

TrainTunnel.prototype.pushTrain = function() {
  if(this.i < this.train.length) {
    this.tunnel.push(this.train[this.i])
  }
  this.i += 1;
  this.popTrain()
}

TrainTunnel.prototype.popTrain = function() {
  this.render([...this.tunnel]);
  if(this.tunnel.length >= this.limit || this.train.length < this.i) {
    this.tunnel.shift();
  }
  if(this.tunnel.length > 0) {
    setTimeout(() => {
      this.pushTrain();
    }, 1000);
  }
}

TrainTunnel.prototype.render = function() {
  if(this.tunnel.length == 1) {
    console.log(`${this.tunnel[this.tunnel.length-1].trainNo}`);
  } else {
    let b = [];
    this.tunnel.map((item) => {
      b.push(item.trainNo)
    });
    console.log(`${b.reverse()}`)
  }
}

new TrainTunnel(train, 5);
