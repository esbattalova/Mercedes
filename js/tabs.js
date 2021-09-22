const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
//design-list__item_active
console.log(tabsFieldElems)
for (let btn of tabsHandlerElems) {

    btn.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => {
            item.classList.remove('design-list__item_active');
            
        })

        btn.classList.add('design-list__item_active');

        tabsFieldElems.forEach(content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden');
            }
            else {
                content.classList.add('hidden'); 
            }

        })
        console.dir(btn.dataset.tabsHandler)
        //console.log('click');
    })
}