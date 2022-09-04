import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Contacts from "../Contacts/Contacts";
import NewContactsModal from "../Contacts/NewContactsModal";
import Conversations from "../Conversations/Conversations";
import NewConversationModal from "../Conversations/NewConversationModal";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationOpen = activeKey === CONVERSATIONS_KEY;

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-end flex-grow-1 overflow-auto">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-end">
          <span className="fw-bold">Your ID</span> :{" "}
          <span className="text-muted">{id}</span>
        </div>
        <Button className="py-2 rounded-0">
          New {conversationOpen ? "Conversation" : "Contacts"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactsModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
