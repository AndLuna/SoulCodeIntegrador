//se StageName == Negotiation/review -> Enviar uma tarefa
//se StageName == Closed Won -> Enviar uma tarefa com assunto: Confecção e entrega imediata.   
trigger Oportunidade on Opportunity (after insert, after update) {
   List<Task> lstTasks = new List<Task>();
    
    if(Trigger.isInsert && Trigger.isAfter){
        for(Opportunity opp: Trigger.new){
            if(opp.StageName == 'Negotiation/Review'){
               
                Task task = new Task(
                Subject = 'Fechar essa com prioridade.',
                WhatId = opp.Id,
                    ActivityDate = date.today()+1
                );
                
                lstTasks.add(task);
            }
        }
    
        if(lstTasks.size() > 0){ insert lstTasks;}
    }   
// Se a oportunidade for fechada, enviar uma tarefa com assunto: Confecção e entrega imediata.   
    if(Trigger.isUpdate && Trigger.isAfter){
        List<Task> lstask = new List <Task>();
        
     for(Opportunity opp: Trigger.new){
            if(opp.StageName == 'Closed Won'){
               
                Task task = new Task(
                Subject = 'Confecção e entrega imediata.',
                WhatId = opp.Id,
                ActivityDate = date.today()+2
                );  
                lstTasks.add(task);
            }
        }
        if(lstTasks.size() > 0){ 
            insert lstTasks; 
            
       } 
        if(Trigger.isUpdate || Trigger.isInsert){
          
            for(Opportunity opp: Trigger.new){
            if(trigger.oldMap.get(opp.id).StageName == 'Closed Won' && trigger.newMap.get(opp.id).StageName != 'Closed Won'){
                opp.addError('A fase já foi fechada, não pode ser alterada.');
    }
            }
}
    }
}