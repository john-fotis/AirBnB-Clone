package com.uoa.AirBnB.service;

import com.uoa.AirBnB.converter.MessageConverter;
import com.uoa.AirBnB.model.messageModel.Message;
import com.uoa.AirBnB.model.messageModel.MessageDto;
import com.uoa.AirBnB.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class MessageServiceImpl implements MessageService{

    @Autowired
    private MessageRepository messageRepository;

    @Override
    public MessageDto findById(Long id) throws Exception {
        Message message;

        try{
            message=messageRepository.findById(id).get();
        } catch (NoSuchElementException nsee){
            throw new Exception("Message not found", nsee.getCause());
        }
        return MessageConverter.convertToDto(message);
    }

    @Override
    public List<MessageDto> findAll() {
        return messageRepository.findAll()
                .stream()
                .map(MessageConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<MessageDto> findByListing(Long id) {
        return messageRepository.findByListingIdAndWay(id,false)
                .stream()
                .map(MessageConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<MessageDto> findByGuest(Long id) {
        return messageRepository.findByGuestIdAndWayAndSeen(id, true, false)
                .stream()
                .map(MessageConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public MessageDto save(MessageDto messageDto) {
        Message message = MessageConverter.convert(messageDto);
        message=messageRepository.save(message);
        System.out.println("Message added or updated");

        return MessageConverter.convertToDto(message);
    }

    @Override
    public void deleteById(Long id) {
        messageRepository.deleteById(id);
    }

    @Override
    public MessageDto seen(Long id) {
        Message message = messageRepository.findById(id).get();
        message.setSeen(true);
        messageRepository.save(message);

        return MessageConverter.convertToDto(message);
    }
}
