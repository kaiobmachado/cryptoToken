// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


interface IERC20 {

    //Implementado (mais ou menos)
    function totalSupply() external view returns(uint256);
    function balanceOf(address account) external view returns(uint256);
    function transfer(address recipient, uint256 amount) external returns(bool);

    //Não implementados (ainda)
    //function allowence(address owner, address spender) external view returns(uint256);
    //function approve(address spender, uint256 amount) external returns(bool);
    //function transferFrom(address sender, address recipient, uint256 amount) external returns(bool);

    //Implementado
    event Transfer(address from, address to, uint256 value);

    //Não está implementado (ainda)
    //event Approval(address owner, address spender, uint256 value);

}


contract CryptoToken is IERC20 {


    
    //Properties
    string public constant name = "CryptoToken";
    string public constant symbol = "CRY";
    uint8 public constant decimals = 3;  //Default dos exemplos é sempre 18
    uint256 private totalsupply;
    address private owner;
    address[] private tokenOwners;
    address private furnace;
    
    
    
    
    mapping(address => uint256) private addressToBalance;

      modifier isOwner() {
        require(address(msg.sender) == owner , "Sender is not owner!");
        _;
    } 

    // Events
    
 
    //Constructor
    constructor() {
        uint256 total = 100;
        totalsupply = total;
        owner = msg.sender;
        addressToBalance[owner] = totalsupply;
        tokenOwners.push(owner);
        
    }


    //Public Functions
    function totalSupply() public override view returns(uint256) {
        
        return totalsupply;
        
    }

    function balanceOf(address tokenOwner) public override view returns(uint256) {
        return addressToBalance[tokenOwner];
    }

    //FIX: Ta feio, podemos melhorar
    function transfer(address receiver, uint256 quantity) public isOwner override returns(bool) {
        require(quantity <= addressToBalance[owner], "Insufficient Balance to Transfer");
        addressToBalance[owner] = addressToBalance[owner] - quantity;
        addressToBalance[receiver] = addressToBalance[receiver] + quantity;
        tokenOwners.push(receiver);
        emit Transfer(owner, receiver, quantity);
        return true;
    }

    //Mint: Adicionar tokens ao total supply
    function mintToken() public{
       
         uint256 amount = 50; 
       if(balanceOf(owner) < 51){ totalsupply += amount;
        addressToBalance[owner] += amount;
        emit Transfer(owner, owner, 50);}
        
    }
    

}