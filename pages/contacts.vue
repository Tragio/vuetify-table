<template>
  <v-data-table
    :headers="headers"
    :items="contacts"
    :items-per-page="15"
    class="elevation-1"
    style="margin-top: 100px; margin-left: 300px; margin-right: 300px"
  >
    <template #top>
      <v-toolbar flat color="white">
        <h1>Contacts</h1>

        <div class="flex-grow-1"></div>

        <v-dialog v-model="dialog" max-width="500px">
          <template #activator="{ on }">
            <v-btn color="success" v-on="on">
              <v-icon left> mdi-account-plus </v-icon>
              Add Contact
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span style="margin-bottom: 20px">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text v-if="!dialogDelete">
              <v-container>
                <v-row>
                  <v-text-field
                    v-model="editedItem.name"
                    style="width: 440px"
                    label="Name:"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="editedItem.phone"
                    style="width: 440px"
                    label="Phone Number:"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="editedItem.email"
                    style="width: 440px"
                    label="Email Address:"
                    outlined
                  ></v-text-field>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <div v-if="dialogDelete">
                <v-btn color="blue" text @click="close()">Cancel</v-btn>
                <v-btn color="blue" text @click="remove()">Delete</v-btn>
              </div>
              <div v-else>
                <v-btn color="blue" text @click="close()">Cancel</v-btn>
                <v-btn color="blue" text @click="save()">Save</v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template #item.action="{ item }">
      <v-icon color="success" class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon color="success" @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>

    <template #no-data>
      <v-btn color="primary" @click="reset()">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import contactsData from '~/data/contacts.json'
export default {
  data() {
    return {
      dialogDelete: false,
      dialog: false,
      headers: [
        { text: 'ID', value: 'id', width: '6%' },
        { text: 'Name', align: 'left', sortable: true, value: 'name' },
        { text: 'Phone Number', align: 'left', sortable: true, value: 'phone' },
        {
          text: 'Email Address',
          align: 'left',
          sortable: true,
          value: 'email',
        },
        {
          text: 'Actions',
          align: 'center',
          value: 'action',
          sortable: false,
          width: '8%',
        },
      ],
      // Deattach from file, to make reset easier
      contacts: JSON.parse(JSON.stringify(contactsData)),
      // New Contact
      editedIndex: -1,
      editedItem: {},
    }
  },

  computed: {
    formTitle() {
      if (this.dialogDelete) {
        return 'Delete Contact'
      } else if (!this.editedIndex) {
        return 'Edit Contact'
      }
      return 'Add Contact'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
  },

  methods: {
    editItem(item) {
      this.dialogDelete = false
      this.editedIndex = this.contacts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.dialogDelete = true
      this.editedIndex = this.contacts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close() {
      this.dialogDelete = false
      this.editedIndex = -1
      this.editedItem = {}
      this.dialog = false
    },

    save() {
      if (this.editedIndex >= 0) {
        // Edit Contact
        Object.assign(this.contacts[this.editedIndex], this.editedItem)
      } else {
        // New Contact
        const lastItem = this.contacts.length - 1
        this.editedItem.id = this.contacts[lastItem].id + 1
        this.contacts.push(this.editedItem)
      }
      this.close()
    },

    remove() {
      this.contacts.splice(this.editedIndex, 1)
      this.close()
    },

    reset() {
      this.contacts = contactsData
    },
  },
}
</script>

<style></style>
