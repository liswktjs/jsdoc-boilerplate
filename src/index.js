/**
 * vendingMachine manager
 * @constructor
 */

function VendingMachine() {}

/**
 * 유저에게 값을 입력받아 커피를 구매한다
 * @param {number} cost - 입력된 가격
 */

VendingMachine.prototype.getItem(cost) = function() {
}

/**
 * 1000원 이상인지 이하인지 판단한다
 * @param {number} cost - 입력된 가격
 * @return {boolean} 1000원이상이면, true 1000원 미만이면 false
 */

VendingMachine.prototype.checkCostAmount(cost) = function() {
	return isOverThousand;
}

/**
 * 입력된 음료의 저장된 개수를 반환한다
 * @param {string} kindOfCoffee - 어떤 커피인지 넘기기
 * @return {number} 저장된 음료의 개수 반환
 */
VendingMachine.prototype.getSavedCoffeeCount(kindOfCoffee) = function () {
	return count;
}

/**
 * 구입한 개수만큼 자판기 저장소를 업데이트 한다
 * @param {string} kindOfCoffee - 어떤 커피인지 넘기기
 * @param {number} purchasedCount - 구입한 커피 개수 
*/
 VendingMachine.prototype.updateSavedCoffeeCount(kindOfCoffee, purchasedCount) = function () {
}
