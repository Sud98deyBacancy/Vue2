const state = {funds:100000,Pstocks:[] };
const mutations = {
    'BUY_STOCK'(state,{Id,Qty,Price}) {
        const record = state.Pstocks.find(el => el.id == Id);
        if(record){ record.quantity += Qty; }
        else { state.Pstocks.push({id:Id,quantity:Qty}); }
        state.funds -= Price * Qty;
    },
    'SELL_STOCK'(state,{Id,Qty,Price}){
        const record = state.Pstocks.find(el => el.id == Id);
        if(record.quantity > quantity) { record.quantity -= quantity;}
        else { state.Pstocks.splice(state.Pstocks.indexOf(record),1); }
        state.funds += Price * Qty;
    }
};
const actions = {
    sellStock({commit},order){  commit('SELL_STOCK',order); }
}; 
const getters = {
    stockPortfolio(state,getters) {
        return state.Pstocks.map(stock =>{
            const record = getters.stocks.find(el => el.id === stock.id);
           return { 
            id:stock.id,quantity:stock.quantity,name:record.name,price:record.price
           }
        });
    },
    funds(state){ return state.funds; }
};

export default { state,mutations,actions,getters}