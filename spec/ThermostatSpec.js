describe ('Thermostat', function(){
    
    var thermostat;
    
    beforeEach(function(){
      thermostat = new Thermostat();
    });
    
    it('temperature starts at 20 degrees', function(){
      expect(thermostat.temperature()).toEqual(20)
    });

    it('can increase the temperature', function(){
      thermostat.increase(5);
      expect(thermostat.temperature()).toEqual(25)
    });

    it('can decrease the temperature', function(){
        thermostat.decrease(5);
        expect(thermostat.temperature()).toEqual(15)
      });
    
  });
