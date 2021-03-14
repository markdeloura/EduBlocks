
/**
 * Main class for Classroom Submission Modal
 */
import { ref, Ref } from "vue";

export class ClassroomSubmissionModal {
	public toggled: Ref<boolean> = ref(false);
	public data: Ref = ref();
}

export let currentAssignment: any;