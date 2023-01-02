trigger LeadenviarEmail on Lead (before insert) {
  List<Messaging.SingleEmailMessage> emails = new List<Messaging.SingleEmailMessage>();
    
    for (Lead lead : Trigger.new) {
        // mensagem de email
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        email.setToAddresses(new String[] { lead.Email });
        email.setSubject('Bem-vindo ao nosso time!');
        email.setPlainTextBody('Obrigado por se inscrever em nossa empresa. Estamos ansiosos para trabalhar com você!');
        
        emails.add(email);
    }
    
    // enviar os emails
    Messaging.sendEmail(emails); 
}