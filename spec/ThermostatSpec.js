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

    it('throws an error if decrease below minimum temperature', function(){
        expect(function(){ thermostat.decrease(11); }).toThrow(new Error("Warning! It's getting nippy in here"));
      });

    it('has a maximum temperature of 25 degrees if power saving mode is on', function(){
        expect(function(){ thermostat.increase(6); }).toThrow(new Error("Warning! power saving mode on: max temp is 25 degrees"));
    });

    it('has a maximum temperature of 32 degrees if power saving mode is off', function(){
        thermostat.powerSaverOff();
        expect(function(){ thermostat.increase(13); }).toThrow(new Error("Warning! max temp is 32 degrees"));
    });

    it('can reset the temperature to 20', function(){
        thermostat.increase(5)
        thermostat.reset();
        expect(thermostat.temperature()).toEqual(20)
    });

    it('tells us if our energy usage is low', function(){
      thermostat.decrease(3);
      expect(thermostat.checkUsage()).toEqual("low-usage")
    });

    it('tells us if our energy usage is medium', function(){
      expect(thermostat.checkUsage()).toEqual("medium-usage")
    });

    it('tells us if our energy usage is high', function(){
      thermostat.powerSaverOff();
      thermostat.increase(6);
      expect(thermostat.checkUsage()).toEqual("high-usage")
    });

  });
