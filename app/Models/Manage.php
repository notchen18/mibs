<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manage extends Model
{
    use HasFactory;
    
    protected $primaryKey = "IntentionID";

    protected $fillable = ['IntentionType', 'DateOfMass', 'TimeOfMass', 'Offerer', 'ContactNo', 'OfferedFor', 'status', 'created_by', 'updated_by'];

    protected $table = 'manages';

    public function createdby()
    {
        return $this->belongsTo(User::class, 'created_by'); //meaning ang mass intention kay gi create sa specific user
    }

    public function updatedby()
    {
        return $this->belongsTo(User::class, 'updated_by'); //meaning ang mass intention kay gi create sa specific user
    }
}
