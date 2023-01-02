trigger LeadTg on Lead (before update, before insert, after insert) {
	
    if (Trigger.isBefore && Trigger.isInsert) {
        for (Lead lead: Trigger.new) {
            if (lead.LeadSource == null){
                lead.LeadSource = 'Web';
            }
        }
    }
    if (Trigger.isBefore && Trigger.isUpdate) {
        for (Lead lead: Trigger.new) {
            if (trigger.oldMap.get(lead.id).LeadSource != trigger.newMap.get(lead.id).LeadSource) {
                lead.addError('Após a definição de uma origem do lead, não é possível modifica-la.');
            }
        }
    }
    if(trigger.isAfter && trigger.isInsert){
           List<Task> lstTask = New List<Task>();            
            for(Lead lead :trigger.new){
                if(lead.Revendedor__c == False){
                    Task task = new Task(
                    subject = 'Enviar email oferencendo produtos',
                    ActivityDate = date.today() + 5,    
                        WhoID = lead.id
                   );
                    lstTask.add(Task);
                }
            }
            if(lstTask.size()>0) {
                Insert lstTask;
            }   
        }
    if(trigger.isAfter && trigger.isInsert){
           List<Task> lstTask = New List<Task>();            
            for(Lead lead :trigger.new){
                if(lead.Revendedor__c == True){
                    Task task = new Task(
                    subject = 'Enviar email oferencendo produtos e Cupom de Desconto de 5% a partir de 10 peças, 15% a partir de 20 peças, 20% a partir de 30 peças!',
                    Priority = 'High',
                    ActivityDate = date.today() + 5,
                    WhoID = lead.id
                   );
                    lstTask.add(Task);
                }
            }
            if(lstTask.size()>0) {
                Insert lstTask;
            }   
        }
    }