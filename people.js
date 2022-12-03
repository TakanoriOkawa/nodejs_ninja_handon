const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [10, 22, 11, 44];

console.log(people);

// 読み込み先で共通のプロパティで利用する為に、オブジェクト形式でexportsすると良い
module.exports = {
  people: people,
  ages: ages
};