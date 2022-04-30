var config = {
  initialAbility : {
    "strength" : 10,
    "agility" : 10,
    "resilience" : 10,
    "wisdom" : 10,
    "luck" : 10
  }
}
var app = new Vue({
  el: "#app",
  data() {
    return {

      status: {
        message: "Hello world",
        name: "Kiefer",
        job: "Hero",
        jobs: [
          {code: 'ans1', label: 'Hero'},
          {code: 'ans2', label: 'Warrior'},
          {code: 'ans3', label: 'Mage'}
        ],
        gender: "Male",
        trait: "Everyman",
        traits: [
          {code: 'ans1', label: 'Everyman'},
          {code: 'ans2', label: 'Bat out of hell'},
          {code: 'ans3', label: 'Brave'},
          {code: 'ans4', label: 'Lucky devil'},
          {code: 'ans5', label: 'Tomboy'}
        ]
      },
      ability: {
        "strength" : 10,
        "agility" : 10,
        "resilience" : 10,
        "wisdom" : 10,
        "luck" : 10
      }
    }
  },
  methods: {
    nameInputHandler: function($event) {
      this.status.name = $event.target.value;
    },
    img_format: (job, gender) => 'img/' + gender.toLowerCase() + '-' + job.toLowerCase() + '.png',
  },
  watch: {
    'status.trait': function(newtrait, oldtrait) {
      this.ability = {...config.initialAbility};
      if(newtrait == "Bat out of hell") {
        this.ability.agility *= 1.4;
      }
      else if(newtrait == "Brave") {
        this.ability.strength *= 1.1;
        this.ability.agility *= 1.1;
        this.ability.luck *= 1.2;
      }
      else if(newtrait == "Lucky devil" && this.status.gender == "Male") {
        this.ability.luck = config.initialAbility.luck*1.5;
      }
      else if(newtrait == "Tomboy" && this.status.gender == "Female") {
        this.ability.strength *= 1.1;
        this.ability.agility *= 1.1;
      }
    },
    'status.gender': function(newgender, oldgender) {
      this.ability = {...config.initialAbility},
      this.status.trait = "Everyman"
    }
  },
});
