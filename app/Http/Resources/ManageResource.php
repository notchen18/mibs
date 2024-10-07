<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
class ManageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'IntentionID' => $this->IntentionID,  // Primary Key
            'IntentionType' => $this->IntentionType,
            'DateOfMass' => Carbon::parse($this->DateOfMass)->format('Y-m-d'),
            'TimeOfMass' => $this->TimeOfMass,
            'Offerer' => $this->Offerer,
            'ContactNo' => $this->ContactNo,  // nullable
            'OfferedFor' => $this->OfferedFor,
            'status' => $this->status, 
            'created_by' => $this->created_by,  // Foreign Key
            'updated_by' => $this->updated_by,  // Foreign Key
            'created_at' => Carbon::parse($this->created_at)->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::parse($this->updated_at)->format('Y-m-d H:i:s'),
        ];
    }
}
