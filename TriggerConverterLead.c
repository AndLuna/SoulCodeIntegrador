// Ao criar um lead, caso o tipoCliente seja revendedor, será criada uma oportunidade.
trigger leadToOpportunity on Lead (before insert) {
   // se a quantidade de itens comprados for menor que 10:
    if(trigger.isbefore && trigger.isInsert){
    for (Lead lead : Trigger.new) {
        if (lead.Revendedor__c	 == true && lead.Quantidade_itens__c	< 10) {
           
            //criar uma conta
            Account acc = new Account();
            acc.Name = lead.Lastname;
            acc.Rating = 'cold';
             insert acc;
            
            //criar um contato
            Contact ctc = new Contact();
            ctc.LastName = lead.Lastname;
            ctc.AccountId = acc.Id;
            insert ctc;          
            
            //criar uma oportunidade vinculada a conta e contato
            Opportunity opp = new Opportunity();
            opp.Name = lead.Lastname;
            opp.StageName = 'Prospecting';
            opp.CloseDate = date.today()+5;
            opp.AccountId = acc.Id;
            opp.ContactId = ctc.Id;
            insert opp;
            
        }  // se a quantidade de itens comprados for entre 10 e 50:
           if(lead.Revendedor__c == true && (lead.Quantidade_itens__c > 10 && lead.Quantidade_itens__c < 50)){
            
            //criar uma conta
            Account acc = new Account();
            acc.Name = lead.Lastname;
            acc.Rating = 'warm';
            insert acc;
            
            //criar um contato
            Contact ctc = new Contact();
            ctc.LastName = lead.Lastname;
            ctc.AccountId = acc.Id;
            insert ctc;          
            
            //criar uma oportunidade vinculada a conta e contato
            Opportunity opp = new Opportunity();
            opp.Name = lead.Lastname;
            opp.StageName = 'Perception Analysis';
            opp.CloseDate = date.today()+5;
            opp.AccountId = acc.Id;
            opp.ContactId = ctc.Id;
            insert opp;
               
        } 
        // se a quantidade de itens comprados for maior que 50:
           if(lead.Revendedor__c == true && (lead.Quantidade_itens__c > 50)){
            //criar uma conta
            Account acc = new Account();
            acc.Name = lead.Lastname;
            acc.Rating = 'hot';
            insert acc;
            
            //criar um contato
            Contact ctc = new Contact();
            ctc.LastName = lead.Lastname;
            ctc.AccountId = acc.Id;
            insert ctc;          
            
            //criar uma oportunidade vinculada a conta e contato
            Opportunity opp = new Opportunity();
            opp.Name = lead.Lastname;
            opp.StageName = 'Negotiation/Review';
            opp.CloseDate = date.today()+5;
            opp.AccountId = acc.Id;
            opp.ContactId = ctc.Id;
            insert opp;                                      
    }
    }
    } 
    
}