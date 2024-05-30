import { ref } from 'vue'


const newIssueDialogVisible = ref(false)

function openNewIssueDialog () {
  newIssueDialogVisible.value = true
}

function closeNewIssueDialog () {
  newIssueDialogVisible.value = false
}

export function useNewIssueDialog () {
  return {
    newIssueDialogVisible,
    openNewIssueDialog,
    closeNewIssueDialog,
  }
}
